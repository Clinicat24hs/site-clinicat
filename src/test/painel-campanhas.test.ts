import { describe, it, expect } from "vitest";
import {
  buscarDadosPainel,
  extrairLinhas,
  hojeSaoPaulo,
  inicioJanela,
  ErroWindsor,
} from "@/lib/painel-campanhas";

/**
 * O painel /painel-campanha depende de uma API externa que não roda no CI.
 * Estes testes fixam o que é nosso: a janela de datas, o filtro pelas
 * campanhas do painel e o que acontece quando o Windsor recusa um parâmetro.
 */

type Resposta = { status: number; body: unknown };

function fetchFalso(responder: (url: URL) => Resposta) {
  const chamadas: URL[] = [];
  const impl = async (url: string) => {
    const u = new URL(url);
    chamadas.push(u);
    const r = responder(u);
    return { ok: r.status < 400, status: r.status, json: async () => r.body };
  };
  return { impl, chamadas };
}

describe("janela de datas", () => {
  it("usa o fuso de São Paulo, não o UTC do servidor", () => {
    // 01:30 UTC de 1º/10 ainda é 30/09 em São Paulo
    expect(hojeSaoPaulo(new Date("2026-10-01T01:30:00Z"))).toBe("2026-09-30");
  });

  it("começa 29 dias antes quando o mês ainda está no início", () => {
    expect(inicioJanela("2026-09-28")).toBe("2026-08-30");
  });

  it("começa no dia 1º quando o mês tem mais de 30 dias corridos", () => {
    expect(inicioJanela("2026-10-31")).toBe("2026-10-01");
  });
});

describe("extrairLinhas", () => {
  it("fica só com as campanhas do painel e normaliza o id para texto", () => {
    const linhas = extrairLinhas({
      data: [
        { campaign_id: 24298406528, spend: 10 },
        { campaign_id: "99999", spend: 50 },
      ],
    });
    expect(linhas).toEqual([{ campaign_id: "24298406528", spend: 10 }]);
  });

  it("aceita lista solta e o formato com result", () => {
    expect(extrairLinhas([{ campaign_id: "24292620651" }])).toHaveLength(1);
    expect(extrairLinhas({ result: [{ campaign_id: "24292620651" }] })).toHaveLength(1);
  });

  it("devolve null quando não há lista de linhas", () => {
    expect(extrairLinhas({ error: "x" })).toBeNull();
    expect(extrairLinhas(null)).toBeNull();
  });
});

describe("buscarDadosPainel", () => {
  const agora = new Date("2026-09-28T20:00:00Z");

  it("pede métricas da janela e status com as campanhas pausadas", async () => {
    const { impl, chamadas } = fetchFalso(() => ({ status: 200, body: { data: [] } }));
    const dados = await buscarDadosPainel(impl, "chave", agora);
    expect(dados).toMatchObject({ desde: "2026-08-30", ate: "2026-09-28", linhas: [], status: [] });
    const metricas = chamadas.find((u) => u.searchParams.get("date_from"));
    expect(metricas?.searchParams.get("date_to")).toBe("2026-09-28");
    expect(metricas?.searchParams.get("select_accounts")).toBe("233-955-5848");
    expect(chamadas.some((u) => u.searchParams.get("include_inactive") === "true")).toBe(true);
  });

  it("repete o status sem include_inactive se a API recusar o parâmetro", async () => {
    const { impl, chamadas } = fetchFalso((u) =>
      u.searchParams.has("include_inactive")
        ? { status: 400, body: { error: "unknown parameter" } }
        : { status: 200, body: { data: [{ campaign_id: "24298406528", campaign_status: "PAUSED" }] } },
    );
    const dados = await buscarDadosPainel(impl, "chave", agora);
    expect(dados.status).toHaveLength(1);
    expect(chamadas).toHaveLength(3);
  });

  it("não mascara chave inválida com a segunda tentativa", async () => {
    const { impl } = fetchFalso(() => ({ status: 401, body: { error: "invalid api key" } }));
    await expect(buscarDadosPainel(impl, "errada", agora)).rejects.toBeInstanceOf(ErroWindsor);
  });
});

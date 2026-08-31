import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

/**
 * O site não guarda leads: o formulário abre o WhatsApp. A origem do clique
 * pago só chega até a recepção dentro do texto da mensagem, montado por
 * public/script.js. Se essa montagem quebrar, os leads voltam a chegar sem
 * campanha e sem bairro — exatamente o buraco que a auditoria de mídia
 * encontrou — e nada no build acusa.
 *
 * Por isso o teste roda o arquivo que é servido, e não uma cópia da lógica.
 */

const SCRIPT = fs.readFileSync(
  path.resolve(__dirname, "../../public/script.js"),
  "utf8",
);

type Listener = (event: unknown) => void;

interface Harness {
  submitForm(fields: Record<string, string>): string | null;
  storedAttribution(): string | null;
}

/**
 * Executa public/script.js num contexto isolado com o mínimo de DOM que ele
 * usa, e devolve um gancho para disparar o submit e ler a URL do WhatsApp.
 */
function runScript(
  search: string,
  storage: Record<string, string> = {},
  storageApi?: { getItem(k: string): string | null; setItem(k: string, v: string): void },
): Harness {
  const submitListeners: Listener[] = [];
  let openedUrl: string | null = null;

  const noopElement = {
    addEventListener() {},
    querySelectorAll: () => [],
    hasAttribute: () => false,
    setAttribute() {},
    removeAttribute() {},
    textContent: "",
  };

  const context: Record<string, unknown> = {
    document: {
      getElementById: () => null,
      addEventListener(type: string, fn: Listener) {
        if (type === "submit") submitListeners.push(fn);
      },
    },
    localStorage: storageApi ?? {
      getItem: (k: string) => (k in storage ? storage[k] : null),
      setItem: (k: string, v: string) => {
        storage[k] = v;
      },
    },
    URLSearchParams,
    JSON,
    Date,
    window: {
      location: { search },
      open: (url: string) => {
        openedUrl = url;
      },
    },
  };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(SCRIPT, context);

  return {
    submitForm(fields) {
      openedUrl = null;
      const form = {
        ...noopElement,
        getAttribute: (name: string) =>
          name === "data-wpp-phone" ? "5511932565663" : null,
      };
      const event = {
        target: { closest: (sel: string) => (sel === "[data-wpp-form]" ? form : null) },
        preventDefault() {},
      };
      // FormData real não existe no ambiente node do vitest; o script só usa
      // .get(), então entregamos os campos por esse contrato.
      context.FormData = class {
        get(name: string) {
          return name in fields ? fields[name] : null;
        }
      };
      submitListeners.forEach((fn) => fn(event));
      return openedUrl;
    },
    storedAttribution: () => storage["clinicat_attr"] ?? null,
  };
}

/** Mesmo cenário, mas com um localStorage que lança em toda operação. */
function runScriptWithHostileStorage(search: string): Harness {
  const throwing = {
    getItem() {
      throw new Error("SecurityError: storage bloqueado");
    },
    setItem() {
      throw new Error("SecurityError: storage bloqueado");
    },
  };
  return runScript(search, {}, throwing);
}

/** Devolve o texto da mensagem já decodificado a partir da URL do wa.me. */
function messageOf(url: string | null): string {
  expect(url).toBeTruthy();
  const text = new URL(url as string).searchParams.get("text");
  return text ?? "";
}

describe("origem do lead no WhatsApp", () => {
  it("leva o bairro informado para dentro da mensagem", () => {
    const h = runScript("");
    const msg = messageOf(
      h.submitForm({ nome: "Ana", telefone: "11999999999", bairro: "Perdizes" }),
    );
    expect(msg).toContain("*Nome:* Ana");
    expect(msg).toContain("*Bairro/CEP:* Perdizes");
  });

  it("guarda o gclid do anúncio e o repassa inteiro, para importar a conversão offline", () => {
    const h = runScript("?gclid=Cj0KCQjw_TESTE123&utm_source=google&utm_medium=cpc&utm_campaign=emergencia-24h");
    const msg = messageOf(h.submitForm({ nome: "Ana", bairro: "Pompeia" }));
    expect(msg).toContain("google / cpc / emergencia-24h");
    expect(msg).toContain("gclid:Cj0KCQjw_TESTE123");
  });

  it("reconhece wbraid, que substitui o gclid quando não há consentimento de cookies", () => {
    const h = runScript("?wbraid=WB_TESTE");
    expect(messageOf(h.submitForm({ nome: "Ana" }))).toContain("gclid:WB_TESTE");
  });

  it("identifica o clique do Meta pelo fbclid", () => {
    const h = runScript("?fbclid=FB_TESTE");
    const msg = messageOf(h.submitForm({ nome: "Ana" }));
    expect(msg).toContain("meta");
    expect(msg).toContain("fbclid:FB_TESTE");
  });

  it("não inventa origem quando a visita é direta", () => {
    const h = runScript("");
    expect(messageOf(h.submitForm({ nome: "Ana" }))).not.toContain("origem:");
    expect(h.storedAttribution()).toBeNull();
  });

  it("preserva a origem paga quando a pessoa navega e volta sem parâmetros", () => {
    const storage: Record<string, string> = {};
    runScript("?gclid=PRIMEIRO", storage);
    const depois = runScript("", storage);
    expect(messageOf(depois.submitForm({ nome: "Ana" }))).toContain("gclid:PRIMEIRO");
  });

  it("deixa o clique mais recente vencer, como Google e Meta atribuem", () => {
    const storage: Record<string, string> = {};
    runScript("?gclid=ANTIGO", storage);
    const novo = runScript("?gclid=NOVO", storage);
    const msg = messageOf(novo.submitForm({ nome: "Ana" }));
    expect(msg).toContain("gclid:NOVO");
    expect(msg).not.toContain("gclid:ANTIGO");
  });

  it("descarta origem com mais de 90 dias em vez de atribuir a campanha errada", () => {
    const storage = {
      clinicat_attr: JSON.stringify({
        ts: Date.now() - 91 * 24 * 60 * 60 * 1000,
        gclid: "EXPIRADO",
      }),
    };
    const h = runScript("", storage);
    expect(messageOf(h.submitForm({ nome: "Ana" }))).not.toContain("EXPIRADO");
  });

  it("ainda envia o lead quando o storage está bloqueado (aba anônima)", () => {
    const h = runScriptWithHostileStorage("?gclid=X");
    const msg = messageOf(h.submitForm({ nome: "Ana", bairro: "Perdizes" }));
    // Perder a origem é aceitável; perder o lead não é.
    expect(msg).toContain("*Nome:* Ana");
    expect(msg).toContain("*Bairro/CEP:* Perdizes");
  });
});

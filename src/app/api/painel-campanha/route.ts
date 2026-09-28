import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import {
  CAMPANHAS,
  MEDICAO_CONVERSOES_OK,
  buscarDadosPainel,
  ErroWindsor,
  type DadosPainel,
} from "@/lib/painel-campanhas";

export const dynamic = "force-dynamic";

// O Windsor conta chamadas; o painel se atualiza a cada 15 min e várias
// pessoas podem abrir ao mesmo tempo. Uma leitura serve a todos por 10 min,
// e "Atualizar" força uma nova no máximo a cada 1 min.
const VALIDADE_MS = 10 * 60 * 1000;
const INTERVALO_MINIMO_MS = 60 * 1000;
let cache: { dados: DadosPainel; em: number } | null = null;
let emAndamento: Promise<DadosPainel> | null = null;

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ erro: "nao_autorizado" }, { status: 401 });
  }

  const apiKey = process.env.WINDSOR_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ erro: "sem_chave" }, { status: 503 });
  }

  const forcar = new URL(req.url).searchParams.get("atualizar") === "1";
  const agora = Date.now();
  const idade = cache ? agora - cache.em : Infinity;
  const precisa = idade > VALIDADE_MS || (forcar && idade > INTERVALO_MINIMO_MS);

  if (precisa) {
    emAndamento ??= buscarDadosPainel((url) => fetch(url, { cache: "no-store" }), apiKey).finally(() => {
      emAndamento = null;
    });
    try {
      cache = { dados: await emAndamento, em: Date.now() };
    } catch (e) {
      const detalhe = e instanceof ErroWindsor ? e.message : "falha de rede";
      // Com uma leitura anterior em mãos, entrega ela e avisa que está velha.
      if (cache) {
        return NextResponse.json({ ...resposta(cache.dados), aviso: `Windsor não respondeu (${detalhe})` });
      }
      return NextResponse.json({ erro: "windsor", detalhe }, { status: 502 });
    }
  }

  return NextResponse.json(resposta(cache!.dados), { headers: { "Cache-Control": "private, no-store" } });
}

function resposta(dados: DadosPainel) {
  return { campanhas: CAMPANHAS, medicaoConversoesOk: MEDICAO_CONVERSOES_OK, ...dados };
}

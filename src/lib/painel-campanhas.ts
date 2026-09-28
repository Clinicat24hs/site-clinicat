/**
 * Dados do painel /painel-campanha: as campanhas de Busca criadas em set/2026 e
 * a leitura das métricas delas no Windsor.ai (que lê a conta do Google Ads).
 *
 * A chave WINDSOR_API_KEY fica só no servidor; a página pede os dados para
 * /api/painel-campanha, que exige login.
 */

export const CONTA_GOOGLE_ADS = "233-955-5848";

/** Verba mensal e teto de CPC definidos na criação de cada campanha. */
export const CAMPANHAS = [
  { id: "24298406528", nome: "Emergência 24h", verba: 400, teto: 4.0 },
  { id: "24303893437", nome: "Castração", verba: 400, teto: 3.5 },
  { id: "24298166369", nome: "Tartarectomia", verba: 400, teto: 3.5 },
  { id: "24292620651", nome: "Banho e Tosa", verba: 400, teto: 2.5 },
  { id: "24298172315", nome: "Hotel e Creche", verba: 400, teto: 3.0 },
  { id: "24303897328", nome: "Clínica, Consulta e Vacinas", verba: 150, teto: 2.5 },
] as const;

/**
 * Enquanto "Visitas à loja" contar como conversão principal (itens 1.1 e 1.2
 * do relatório de performance), o número de conversões do Google não é
 * confiável. Mude para true quando a medição for corrigida.
 */
export const MEDICAO_CONVERSOES_OK = false;

const IDS = new Set<string>(CAMPANHAS.map((c) => c.id));

export const CAMPOS_METRICAS = [
  "date",
  "campaign_id",
  "spend",
  "clicks",
  "impressions",
  "conversions",
  "phone_calls",
  "search_impression_share",
  "search_budget_lost_impression_share",
  "search_rank_lost_impression_share",
];

export const CAMPOS_STATUS = [
  "campaign_id",
  "campaign",
  "campaign_status",
  "campaign_geo_target_type_setting_positive_geo_target_type",
];

export type Linha = Record<string, unknown> & { campaign_id: string };

/** Data de hoje (yyyy-mm-dd) no fuso de São Paulo. */
export function hojeSaoPaulo(agora: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(agora);
}

/** Início da janela lida: o que vier antes entre o dia 1º do mês e 29 dias atrás. */
export function inicioJanela(hoje: string): string {
  const d = new Date(`${hoje}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 29);
  const trintaDias = d.toISOString().slice(0, 10);
  const inicioMes = `${hoje.slice(0, 8)}01`;
  return inicioMes < trintaDias ? inicioMes : trintaDias;
}

export function urlWindsor(apiKey: string, params: Record<string, string>): string {
  const q = new URLSearchParams({ api_key: apiKey, select_accounts: CONTA_GOOGLE_ADS, ...params });
  return `https://connectors.windsor.ai/google_ads?${q.toString()}`;
}

/**
 * A API devolve as linhas em `data`; aceitamos também uma lista solta ou
 * `result`, para não quebrar se o formato variar. Fica só o que é das
 * campanhas do painel, com o id sempre como texto.
 */
export function extrairLinhas(json: unknown): Linha[] | null {
  const bruto = Array.isArray(json)
    ? json
    : json && typeof json === "object"
      ? ((json as { data?: unknown; result?: unknown }).data ??
        (json as { result?: unknown }).result)
      : null;
  if (!Array.isArray(bruto)) return null;
  return bruto
    .filter((r): r is Record<string, unknown> => !!r && typeof r === "object")
    .map((r) => ({ ...r, campaign_id: String(r.campaign_id ?? "") }))
    .filter((r) => IDS.has(r.campaign_id));
}

export class ErroWindsor extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
  }
}

type Fetch = (url: string) => Promise<{ ok: boolean; status: number; json(): Promise<unknown> }>;

async function consultar(fetchImpl: Fetch, url: string): Promise<Linha[]> {
  const res = await fetchImpl(url);
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const msg =
      json && typeof json === "object" && "error" in json
        ? String((json as { error: unknown }).error)
        : `HTTP ${res.status}`;
    throw new ErroWindsor(msg, res.status);
  }
  const linhas = extrairLinhas(json);
  if (!linhas) throw new ErroWindsor("resposta em formato inesperado", res.status);
  return linhas;
}

export interface DadosPainel {
  atualizadoEm: string;
  desde: string;
  ate: string;
  linhas: Linha[];
  status: Linha[];
}

/**
 * Lê métricas diárias e o status das campanhas. O status pede também as
 * campanhas sem veiculação (`include_inactive`); se a API recusar esse
 * parâmetro, repete sem ele — perde só as pausadas sem impressão.
 */
export async function buscarDadosPainel(
  fetchImpl: Fetch,
  apiKey: string,
  agora: Date = new Date(),
): Promise<DadosPainel> {
  const ate = hojeSaoPaulo(agora);
  const desde = inicioJanela(ate);
  const statusBase = { date_preset: "last_7d", fields: CAMPOS_STATUS.join(",") };

  const [linhas, status] = await Promise.all([
    consultar(fetchImpl, urlWindsor(apiKey, { date_from: desde, date_to: ate, fields: CAMPOS_METRICAS.join(",") })),
    consultar(fetchImpl, urlWindsor(apiKey, { ...statusBase, include_inactive: "true" })).catch((e) => {
      if (e instanceof ErroWindsor && e.status && e.status >= 400 && e.status < 500 && e.status !== 401 && e.status !== 403) {
        return consultar(fetchImpl, urlWindsor(apiKey, statusBase));
      }
      throw e;
    }),
  ]);

  return { atualizadoEm: agora.toISOString(), desde, ate, linhas, status };
}

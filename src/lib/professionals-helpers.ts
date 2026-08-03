export type Kind = "EQUIPE" | "ESPECIALISTA";

export interface ParsedName {
  name: string;
  roleRaw: string;
}

// Mapa palavra-chave (lowercase, sem acento) → nome de exibição da especialidade.
const SPECIALTY_KEYWORDS: Array<[RegExp, string]> = [
  [/dermato/, "Dermatologia"],
  [/neuro/, "Neurologia"],
  [/cardio/, "Cardiologia"],
  [/gastro/, "Gastroenterologia"],
  [/oncolog/, "Oncologia"],
  [/ortoped/, "Ortopedia"],
  [/oftalmo/, "Oftalmologia"],
  [/pneumolog/, "Pneumologia"],
  [/ultrasson|ultrason/, "Ultrassonografia"],
  [/endoscopia|video ?cirurgia/, "Endoscopia e Videocirurgia"],
  [/cirurg/, "Cirurgia Geral"],
  [/felina/, "Medicina Felina"],
  [/nefro/, "Nefrologia e Urologia"],
  [/endocrino/, "Endocrinologia"],
];

function deaccent(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function parseFilename(filename: string): ParsedName {
  const noExt = filename.replace(/\.[a-z0-9]+$/i, "").trim();
  // separador: primeiro hífen ou " - "
  const m = noExt.match(/^(.*?)\s*[-–]\s*(.*)$/);
  if (!m) return { name: noExt.trim(), roleRaw: "" };
  return { name: m[1].trim(), roleRaw: m[2].trim() };
}

export interface Classification {
  kind: Kind;
  specialty: string | null;
  title: string;
}

export function classifyProfessional(roleRaw: string): Classification {
  const key = deaccent(roleRaw).toLowerCase();
  for (const [re, name] of SPECIALTY_KEYWORDS) {
    if (re.test(key)) {
      return { kind: "ESPECIALISTA", specialty: name, title: name };
    }
  }
  return { kind: "EQUIPE", specialty: null, title: roleRaw || "Equipe Clinicat" };
}

export interface HasSpecialty {
  specialty: string | null;
  [k: string]: unknown;
}

export interface SpecialtyGroup<T> {
  specialty: string;
  items: T[];
}

export function groupBySpecialty<T extends HasSpecialty>(items: T[]): SpecialtyGroup<T>[] {
  const order: string[] = [];
  const map = new Map<string, T[]>();
  for (const it of items) {
    const key = it.specialty ?? "Outros";
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key)!.push(it);
  }
  return order.map((specialty) => ({ specialty, items: map.get(specialty)! }));
}

export function slugifyName(name: string): string {
  return deaccent(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

import { describe, it, expect } from "vitest";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const DATA = require("../../prisma/data/content-data.js") as Array<{
  type: string;
  slug: string;
  title: string;
  intro: string;
  highlights: string[];
  linkSpecialty?: string | null;
}>;

describe("content-data", () => {
  it("tem >=19 especialidades e 10 serviços", () => {
    const esp = DATA.filter((d) => d.type === "ESPECIALIDADE");
    const svc = DATA.filter((d) => d.type === "SERVICO");
    expect(esp.length).toBeGreaterThanOrEqual(19);
    expect(svc.length).toBe(10);
  });

  it("todo item tem slug kebab único, title, intro e >=3 highlights", () => {
    const slugs = new Set<string>();
    for (const d of DATA) {
      expect(d.slug).toMatch(/^[a-z0-9-]+$/);
      expect(slugs.has(d.slug)).toBe(false);
      slugs.add(d.slug);
      expect(d.title.length).toBeGreaterThan(0);
      expect(d.intro.length).toBeGreaterThan(40);
      expect(Array.isArray(d.highlights) && d.highlights.length >= 3).toBe(true);
    }
  });

  it("linkSpecialty (quando presente) casa com valores reais de Professional.specialty", () => {
    const validSpecialties = new Set([
      "Cardiologia", "Ortopedia", "Dermatologia", "Oftalmologia", "Oncologia",
      "Nefrologia e Urologia", "Neurologia", "Gastroenterologia", "Pneumologia",
      "Ultrassonografia", "Endoscopia e Videocirurgia", "Cirurgia Geral",
      "Medicina Felina", "Endocrinologia",
    ]);
    for (const d of DATA) {
      if (d.linkSpecialty) expect(validSpecialties.has(d.linkSpecialty)).toBe(true);
    }
  });
});

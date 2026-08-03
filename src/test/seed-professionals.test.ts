import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";
import { parseFilename, classifyProfessional } from "@/lib/professionals-helpers";

// Lê a constante PHOTOS do seed via regex (evita importar CJS que conecta no banco).
const seedSrc = readFileSync(join(__dirname, "../../prisma/seed-professionals.js"), "utf8");
const match = seedSrc.match(/const PHOTOS =\s*(\[[\s\S]*?\]);/);
const PHOTOS: Array<{ file: string; webp: string }> = match ? eval(match[1]) : [];

describe("seed PHOTOS", () => {
  it("tem pelo menos 25 fotos", () => {
    expect(PHOTOS.length).toBeGreaterThanOrEqual(25);
  });
  it("todo webp termina em .webp e todo file tem extensão de imagem", () => {
    for (const p of PHOTOS) {
      expect(p.webp).toMatch(/\.webp$/);
      expect(p.file).toMatch(/\.(jpe?g|png|webp)$/i);
    }
  });
  it("classifica corretamente alguns conhecidos", () => {
    const selma = PHOTOS.find((p) => /Selma/i.test(p.file))!;
    const c = classifyProfessional(parseFilename(selma.file).roleRaw);
    expect(c.kind).toBe("ESPECIALISTA");
    expect(c.specialty).toBe("Cirurgia Geral");
    const recep = PHOTOS.find((p) => /Recepcionista/i.test(p.file));
    if (recep) expect(classifyProfessional(parseFilename(recep.file).roleRaw).kind).toBe("EQUIPE");
  });
});

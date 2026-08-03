import { describe, it, expect } from "vitest";
import {
  parseFilename,
  classifyProfessional,
  groupBySpecialty,
  slugifyName,
} from "@/lib/professionals-helpers";

describe("parseFilename", () => {
  it("separa nome e função de 'Selma Rosa-Cirurgia.jpg'", () => {
    expect(parseFilename("Selma Rosa-Cirurgia.jpg")).toEqual({
      name: "Selma Rosa",
      roleRaw: "Cirurgia",
    });
  });
  it("aceita separador ' - ' e espaços extras", () => {
    expect(parseFilename("Nany - Monitora da Creche.jpg")).toEqual({
      name: "Nany",
      roleRaw: "Monitora da Creche",
    });
  });
  it("função vazia quando não há separador", () => {
    expect(parseFilename("Matheus.webp")).toEqual({ name: "Matheus", roleRaw: "" });
  });
});

describe("classifyProfessional", () => {
  it("classifica área clínica como ESPECIALISTA com specialty", () => {
    expect(classifyProfessional("Dermato")).toMatchObject({ kind: "ESPECIALISTA", specialty: "Dermatologia" });
    expect(classifyProfessional("Neurologista")).toMatchObject({ kind: "ESPECIALISTA", specialty: "Neurologia" });
    expect(classifyProfessional("Ultrasonografia")).toMatchObject({ kind: "ESPECIALISTA", specialty: "Ultrassonografia" });
  });
  it("classifica função de apoio como EQUIPE (specialty null)", () => {
    expect(classifyProfessional("Recepcionista")).toMatchObject({ kind: "EQUIPE", specialty: null });
    expect(classifyProfessional("Auxiliar")).toMatchObject({ kind: "EQUIPE", specialty: null });
    expect(classifyProfessional("Veterinaria")).toMatchObject({ kind: "EQUIPE", specialty: null });
  });
  it("usa a função original como title", () => {
    expect(classifyProfessional("Coordenadora Clinica").title).toBe("Coordenadora Clinica");
    expect(classifyProfessional("").title).toBe("Equipe Clinicat");
  });
});

describe("groupBySpecialty", () => {
  it("agrupa por specialty preservando ordem de entrada", () => {
    const items = [
      { id: "1", specialty: "Neurologia", displayOrder: 0 },
      { id: "2", specialty: "Cardiologia", displayOrder: 1 },
      { id: "3", specialty: "Neurologia", displayOrder: 2 },
    ];
    const groups = groupBySpecialty(items as any);
    expect(groups.map((g) => g.specialty)).toEqual(["Neurologia", "Cardiologia"]);
    expect(groups[0].items.map((i) => i.id)).toEqual(["1", "3"]);
  });
});

describe("slugifyName", () => {
  it("normaliza acentos e espaços", () => {
    expect(slugifyName("Nathália Regatieri")).toBe("nathalia-regatieri");
  });
});

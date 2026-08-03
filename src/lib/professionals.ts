import { db } from "@/lib/db";
import type { Professional, ProfessionalKind } from "@prisma/client";

export type { Professional };

export function listPublicTeam(): Promise<Professional[]> {
  return db.professional.findMany({
    where: { kind: "EQUIPE", active: true },
    orderBy: { displayOrder: "asc" },
  });
}

export function listPublicSpecialists(): Promise<Professional[]> {
  return db.professional.findMany({
    where: { kind: "ESPECIALISTA", active: true },
    orderBy: [{ specialty: "asc" }, { displayOrder: "asc" }],
  });
}

export function listAllProfessionals(filter?: {
  kind?: ProfessionalKind;
  q?: string;
}): Promise<Professional[]> {
  return db.professional.findMany({
    where: {
      ...(filter?.kind ? { kind: filter.kind } : {}),
      ...(filter?.q ? { name: { contains: filter.q, mode: "insensitive" } } : {}),
    },
    orderBy: [{ kind: "asc" }, { displayOrder: "asc" }],
  });
}

export function getProfessional(id: string): Promise<Professional | null> {
  return db.professional.findUnique({ where: { id } });
}

export interface ProfessionalInput {
  name: string;
  kind: ProfessionalKind;
  title: string;
  specialty?: string | null;
  crmv?: string | null;
  bio?: string | null;
  photoUrl?: string | null;
  displayOrder?: number;
  active?: boolean;
}

export function createProfessional(data: ProfessionalInput): Promise<Professional> {
  return db.professional.create({ data });
}

export function updateProfessional(id: string, data: Partial<ProfessionalInput>): Promise<Professional> {
  return db.professional.update({ where: { id }, data });
}

export function deleteProfessional(id: string): Promise<Professional> {
  return db.professional.delete({ where: { id } });
}

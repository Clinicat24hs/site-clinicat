"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createProfessional,
  updateProfessional,
  deleteProfessional,
  getProfessional,
  type ProfessionalInput,
} from "@/lib/professionals";
import { deleteUploadedImage } from "@/lib/uploads";
import type { ProfessionalKind } from "@prisma/client";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) throw new Error("Não autorizado");
}

function parseForm(formData: FormData): ProfessionalInput {
  const kind = String(formData.get("kind") || "EQUIPE") as ProfessionalKind;
  const str = (k: string) => {
    const v = String(formData.get(k) ?? "").trim();
    return v.length ? v : null;
  };
  return {
    name: String(formData.get("name") ?? "").trim(),
    kind,
    title: String(formData.get("title") ?? "").trim(),
    specialty: kind === "ESPECIALISTA" ? str("specialty") : null,
    crmv: str("crmv"),
    bio: str("bio"),
    photoUrl: str("photoUrl"),
    displayOrder: Number(formData.get("displayOrder") ?? 0) || 0,
    active: formData.get("active") === "on" || formData.get("active") === "true",
  };
}

function revalidatePublic() {
  revalidatePath("/quem-somos");
  revalidatePath("/especialidades");
  revalidatePath("/admin/professionals");
}

export async function createProfessionalAction(formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  if (!input.name || !input.title) return { error: "Nome e cargo são obrigatórios." };
  await createProfessional(input);
  revalidatePublic();
  redirect("/admin/professionals");
}

export async function updateProfessionalAction(id: string, formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  if (!input.name || !input.title) return { error: "Nome e cargo são obrigatórios." };
  // se a foto mudou, apaga a antiga (só se for um upload do volume /uploads)
  const prev = await getProfessional(id);
  if (prev?.photoUrl && prev.photoUrl !== input.photoUrl && prev.photoUrl.startsWith("/uploads/")) {
    await deleteUploadedImage(prev.photoUrl);
  }
  await updateProfessional(id, input);
  revalidatePublic();
  redirect("/admin/professionals");
}

export async function toggleProfessionalActiveAction(id: string, active: boolean) {
  await requireAdmin();
  await updateProfessional(id, { active });
  revalidatePublic();
}

export async function deleteProfessionalAction(id: string) {
  await requireAdmin();
  const prev = await getProfessional(id);
  if (prev?.photoUrl && prev.photoUrl.startsWith("/uploads/")) {
    await deleteUploadedImage(prev.photoUrl);
  }
  await deleteProfessional(id);
  revalidatePublic();
}

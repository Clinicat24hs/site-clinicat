"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createContent, updateContent, deleteContent, getContent, type ContentInput } from "@/lib/content";
import { deleteUploadedImage } from "@/lib/uploads";
import type { ContentType } from "@prisma/client";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) throw new Error("Não autorizado");
}

function parseForm(formData: FormData): ContentInput {
  const type = String(formData.get("type") || "ESPECIALIDADE") as ContentType;
  const str = (k: string) => {
    const v = String(formData.get(k) ?? "").trim();
    return v.length ? v : null;
  };
  const highlights = String(formData.get("highlights") ?? "")
    .split("\n").map((s) => s.trim()).filter(Boolean);
  return {
    type,
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    tagline: str("tagline"),
    intro: String(formData.get("intro") ?? "").trim(),
    highlights,
    coverUrl: str("coverUrl"),
    linkSpecialty: type === "ESPECIALIDADE" ? str("linkSpecialty") : null,
    seoTitle: str("seoTitle"),
    seoDescription: str("seoDescription"),
    displayOrder: Number(formData.get("displayOrder") ?? 0) || 0,
    active: formData.get("active") === "on" || formData.get("active") === "true",
  };
}

function revalidateFor(type: ContentType, slug: string) {
  revalidatePath("/admin/content");
  if (type === "ESPECIALIDADE") { revalidatePath("/especialidades"); revalidatePath(`/especialidades/${slug}`); }
  else { revalidatePath("/servicos"); revalidatePath(`/servicos/${slug}`); }
}

export async function createContentAction(formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  if (!input.title || !input.slug || !input.intro) return { error: "Título, slug e intro são obrigatórios." };
  await createContent(input);
  revalidateFor(input.type, input.slug);
  redirect("/admin/content");
}

export async function updateContentAction(id: string, formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  if (!input.title || !input.slug || !input.intro) return { error: "Título, slug e intro são obrigatórios." };
  const prev = await getContent(id);
  if (prev?.coverUrl && prev.coverUrl !== input.coverUrl && prev.coverUrl.startsWith("/uploads/")) {
    await deleteUploadedImage(prev.coverUrl);
  }
  await updateContent(id, input);
  revalidateFor(input.type, input.slug);
  redirect("/admin/content");
}

export async function toggleContentActiveAction(id: string, active: boolean) {
  await requireAdmin();
  const c = await updateContent(id, { active });
  revalidateFor(c.type, c.slug);
}

export async function deleteContentAction(id: string) {
  await requireAdmin();
  const prev = await getContent(id);
  if (prev?.coverUrl && prev.coverUrl.startsWith("/uploads/")) await deleteUploadedImage(prev.coverUrl);
  await deleteContent(id);
  if (prev) revalidateFor(prev.type, prev.slug);
}

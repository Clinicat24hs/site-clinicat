"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPost, updatePost, deletePost, getPost, slugifyTitle, type PostInput } from "@/lib/posts";
import { deleteUploadedImage } from "@/lib/uploads";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) throw new Error("Não autorizado");
}

function parseForm(formData: FormData, prevPublishedAt?: Date | null): PostInput {
  const str = (k: string) => {
    const v = String(formData.get(k) ?? "").trim();
    return v.length ? v : null;
  };
  const title = String(formData.get("title") ?? "").trim();
  const slug = (str("slug") ?? slugifyTitle(title)) as string;
  const status = (formData.get("status") === "PUBLICADO" ? "PUBLICADO" : "RASCUNHO") as
    | "PUBLICADO"
    | "RASCUNHO";
  // define publishedAt na primeira publicação; mantém se já existia
  const publishedAt =
    status === "PUBLICADO" ? prevPublishedAt ?? new Date() : prevPublishedAt ?? null;
  return {
    title,
    slug,
    category: String(formData.get("category") ?? "").trim() || "Geral",
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
    coverUrl: str("coverUrl"),
    status,
    publishedAt,
  };
}

function revalidateBlog(slug: string) {
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/posts");
}

export async function createPostAction(formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  if (!input.title || !input.slug || !input.excerpt || !input.content) {
    return { error: "Título, resumo e conteúdo são obrigatórios." };
  }
  await createPost(input);
  revalidateBlog(input.slug);
  redirect("/admin/posts");
}

export async function updatePostAction(id: string, formData: FormData) {
  await requireAdmin();
  const prev = await getPost(id);
  const input = parseForm(formData, prev?.publishedAt ?? null);
  if (!input.title || !input.slug || !input.excerpt || !input.content) {
    return { error: "Título, resumo e conteúdo são obrigatórios." };
  }
  if (prev?.coverUrl && prev.coverUrl !== input.coverUrl && prev.coverUrl.startsWith("/uploads/")) {
    await deleteUploadedImage(prev.coverUrl);
  }
  await updatePost(id, input);
  revalidateBlog(input.slug);
  redirect("/admin/posts");
}

export async function deletePostAction(id: string) {
  await requireAdmin();
  const prev = await getPost(id);
  if (prev?.coverUrl && prev.coverUrl.startsWith("/uploads/")) await deleteUploadedImage(prev.coverUrl);
  await deletePost(id);
  if (prev) revalidateBlog(prev.slug);
}

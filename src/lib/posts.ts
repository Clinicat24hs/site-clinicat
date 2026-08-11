import { db } from "@/lib/db";
import type { Post } from "@prisma/client";

export type { Post };

export function slugifyTitle(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function listPublishedPosts(): Promise<Post[]> {
  return db.post.findMany({
    where: { status: "PUBLICADO" },
    orderBy: { publishedAt: "desc" },
  });
}

export function getPublishedPostBySlug(slug: string): Promise<Post | null> {
  return db.post.findFirst({ where: { slug, status: "PUBLICADO" } });
}

export function listAllPosts(): Promise<Post[]> {
  return db.post.findMany({ orderBy: [{ createdAt: "desc" }] });
}

export function getPost(id: string): Promise<Post | null> {
  return db.post.findUnique({ where: { id } });
}

export interface PostInput {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverUrl?: string | null;
  status?: "RASCUNHO" | "PUBLICADO";
  publishedAt?: Date | null;
}

export function createPost(data: PostInput): Promise<Post> {
  return db.post.create({ data });
}
export function updatePost(id: string, data: Partial<PostInput>): Promise<Post> {
  return db.post.update({ where: { id }, data });
}
export function deletePost(id: string): Promise<Post> {
  return db.post.delete({ where: { id } });
}

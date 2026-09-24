import { db } from "@/lib/db";
import type { ContentPage, ContentType } from "@prisma/client";

export type { ContentPage };

// A UTI foi descontinuada. Remove no render qualquer destaque que mencione "UTI",
// mesmo que o registro no banco ainda a contenha — assim some do site no deploy,
// sem depender de reseed. Idempotente: sem efeito depois que o banco é atualizado.
function stripDiscontinued(page: ContentPage): ContentPage {
  if (!page.highlights?.length) return page;
  const highlights = page.highlights.filter((h) => !/\buti\b/i.test(h));
  return highlights.length === page.highlights.length ? page : { ...page, highlights };
}

export function listContent(type?: ContentType): Promise<ContentPage[]> {
  return db.contentPage.findMany({
    where: type ? { type } : {},
    orderBy: [{ type: "asc" }, { displayOrder: "asc" }],
  });
}

export async function listPublicContent(type: ContentType): Promise<ContentPage[]> {
  const pages = await db.contentPage.findMany({
    where: { type, active: true },
    orderBy: { displayOrder: "asc" },
  });
  return pages.map(stripDiscontinued);
}

export async function getContentBySlug(type: ContentType, slug: string): Promise<ContentPage | null> {
  const page = await db.contentPage.findFirst({ where: { type, slug, active: true } });
  return page ? stripDiscontinued(page) : page;
}

export function getContent(id: string): Promise<ContentPage | null> {
  return db.contentPage.findUnique({ where: { id } });
}

export interface ContentInput {
  type: ContentType;
  slug: string;
  title: string;
  tagline?: string | null;
  intro: string;
  highlights: string[];
  coverUrl?: string | null;
  linkSpecialty?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  displayOrder?: number;
  active?: boolean;
}

export function createContent(data: ContentInput): Promise<ContentPage> {
  return db.contentPage.create({ data });
}
export function updateContent(id: string, data: Partial<ContentInput>): Promise<ContentPage> {
  return db.contentPage.update({ where: { id }, data });
}
export function deleteContent(id: string): Promise<ContentPage> {
  return db.contentPage.delete({ where: { id } });
}

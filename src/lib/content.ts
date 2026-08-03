import { db } from "@/lib/db";
import type { ContentPage, ContentType } from "@prisma/client";

export type { ContentPage };

export function listContent(type?: ContentType): Promise<ContentPage[]> {
  return db.contentPage.findMany({
    where: type ? { type } : {},
    orderBy: [{ type: "asc" }, { displayOrder: "asc" }],
  });
}

export function listPublicContent(type: ContentType): Promise<ContentPage[]> {
  return db.contentPage.findMany({
    where: { type, active: true },
    orderBy: { displayOrder: "asc" },
  });
}

export function getContentBySlug(type: ContentType, slug: string): Promise<ContentPage | null> {
  return db.contentPage.findFirst({ where: { type, slug, active: true } });
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

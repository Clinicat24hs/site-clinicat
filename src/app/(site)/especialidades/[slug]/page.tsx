import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/content";
import { db } from "@/lib/db";
import { ContentPageView } from "@/components/site/ContentPageView";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentBySlug("ESPECIALIDADE", slug);
  if (!page) return {};
  return { title: page.seoTitle ?? `${page.title} — Clinicat`, description: page.seoDescription ?? page.intro.slice(0, 155) };
}

export default async function EspecialidadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getContentBySlug("ESPECIALIDADE", slug);
  if (!page) notFound();
  const specialists = page.linkSpecialty
    ? await db.professional.findMany({
        where: { kind: "ESPECIALISTA", active: true, specialty: page.linkSpecialty },
        orderBy: { displayOrder: "asc" },
      })
    : [];
  return <ContentPageView page={page} specialists={specialists} backHref="/especialidades" backLabel="Especialidades" />;
}

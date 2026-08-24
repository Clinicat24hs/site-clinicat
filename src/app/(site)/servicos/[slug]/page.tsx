import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/content";
import { getServiceGallery } from "@/lib/service-gallery";
import { ContentPageView } from "@/components/site/ContentPageView";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentBySlug("SERVICO", slug);
  if (!page) return {};
  return { title: page.seoTitle ?? `${page.title} — Clinicat`, description: page.seoDescription ?? page.intro.slice(0, 155) };
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getContentBySlug("SERVICO", slug);
  if (!page) notFound();
  const gallery = getServiceGallery(slug);
  return (
    <ContentPageView
      page={page}
      gallery={gallery?.images}
      galleryTitle={gallery?.title}
      gallerySubtitle={gallery?.subtitle}
      cover={gallery?.cover}
      backHref="/servicos"
      backLabel="Serviços"
    />
  );
}

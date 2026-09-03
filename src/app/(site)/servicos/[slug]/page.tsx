import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/content";
import { getServiceGallery } from "@/lib/service-gallery";
import { ContentPageView } from "@/components/site/ContentPageView";
import { ConvenioLogos } from "@/components/site/ConvenioLogos";

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
    <>
      <ContentPageView
        page={page}
        gallery={gallery?.images}
        galleryTitle={gallery?.title}
        gallerySubtitle={gallery?.subtitle}
        cover={gallery?.cover}
        backHref="/servicos"
        backLabel="Serviços"
      />
      {slug === "convenio" && (
        <section className="container section">
          <div className="section-head">
            <p className="kicker primary">Convênios aceitos</p>
            <h2 className="display-md">Trabalhamos com estes <em>convênios</em>.</h2>
          </div>
          <ConvenioLogos height={54} center />
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.7, margin: "1.25rem auto 0", maxWidth: 720, textAlign: "center" }}>
            <strong>Importante:</strong> todas as cobranças e coberturas relacionadas aos convênios são de responsabilidade
            exclusiva do plano contratado. O hospital não se responsabiliza por autorizações, glosas ou limitações de
            cobertura. Para dúvidas, fale diretamente com a central de atendimento do seu plano.
          </p>
        </section>
      )}
    </>
  );
}

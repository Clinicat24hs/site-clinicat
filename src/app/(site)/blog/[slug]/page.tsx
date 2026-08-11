import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPostBySlug } from "@/lib/posts";
import { renderPostContent } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Blog Clinicat`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  const dateStr = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })
    : "";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <a href="/blog">Blog</a> › <span>{post.category}</span></p>
          <p className="kicker primary">{post.category}</p>
          <h1>{post.title}</h1>
          {dateStr && <p className="lead" style={{ fontSize: "0.95rem" }}>Publicado em {dateStr}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {post.coverUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverUrl}
              alt={post.title}
              style={{ width: "100%", borderRadius: 20, marginBottom: "2rem", border: "1px solid var(--border)" }}
            />
          )}
          <div
            className="post-content"
            style={{ fontSize: "1.05rem", lineHeight: 1.75 }}
            dangerouslySetInnerHTML={{ __html: renderPostContent(post.content) }}
          />
        </div>
      </section>

      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Precisa falar com um veterinário?</h2>
          <p>Nossa equipe atende 24 horas por dia em Perdizes. Fale agora pelo WhatsApp.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Falar no WhatsApp →</a>
            <a href="/blog" className="btn btn-outline">Ver mais matérias</a>
          </div>
        </div>
      </section>
    </>
  );
}

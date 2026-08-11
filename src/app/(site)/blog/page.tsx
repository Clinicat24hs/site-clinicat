import type { Metadata } from "next";
import Link from "next/link";
import { listPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog Veterinário | Clinicat — Dicas de saúde para pets",
  description:
    "Blog veterinário da Clinicat: emergências, vacinação, castração, gatos, cães, filhotes, pets idosos, nutrição e saúde preventiva.",
};

export const dynamic = "force-dynamic";

const PostIcon = () => (
  <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
  </svg>
);

export default async function Blog() {
  const posts = await listPublishedPosts();
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Blog</span></p>
          <p className="kicker primary">Blog veterinário</p>
          <h1>Conteúdo especializado para <em>quem ama pets.</em></h1>
          <p className="lead">Dicas, prevenção e orientações dos nossos especialistas. Informação de confiança para cuidar melhor do seu cão ou gato no dia a dia.</p>
        </div>
      </section>

      {/* POSTS */}
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p className="lead">Em breve, novos conteúdos por aqui.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((p) => (
                <article className="post" key={p.id}>
                  <Link href={`/blog/${p.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <div className="post-thumb">
                      {p.coverUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.coverUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <PostIcon />
                      )}
                    </div>
                    <div className="body">
                      <span className="cat">{p.category}</span>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                      <span className="link-underline primary">Ler matéria →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CAPTAÇÃO DE LEADS */}
      <section className="container section">
        <div className="lead-band">
          <div>
            <p className="kicker peach">Newsletter</p>
            <h2 className="display-md">Receba <em>dicas gratuitas</em> de saúde pet.</h2>
            <p>Cadastre-se e receba conteúdos, lembretes e promoções direto no seu WhatsApp e e-mail.</p>
            <ul className="benefits">
              <li>Calendário de vacinação</li>
              <li>Dicas de saúde</li>
              <li>Promoções exclusivas</li>
              <li>Campanhas da Clinicat</li>
            </ul>
          </div>
          <form className="form-card" data-wpp-form data-wpp-phone="5511932565663">
            <div className="field"><label htmlFor="bl-nome">Nome</label><input id="bl-nome" name="nome" type="text" required placeholder="Seu nome" /></div>
            <div className="field"><label htmlFor="bl-tel">WhatsApp</label><input id="bl-tel" name="telefone" type="tel" required placeholder="(11) 90000-0000" /></div>
            <div className="field"><label htmlFor="bl-email">E-mail</label><input id="bl-email" name="email" type="email" placeholder="voce@email.com" /></div>
            <div className="field"><label htmlFor="bl-pet">Nome do pet</label><input id="bl-pet" name="pet" type="text" placeholder="Ex.: Thor" /></div>
            <input type="hidden" name="assunto" value="Quero receber dicas de saúde pet" />
            <button type="submit" className="btn btn-primary block" style={{ justifyContent: "center", width: "100%" }}>Quero receber →</button>
            <p className="form-note">Ao enviar, abrimos uma conversa no WhatsApp já com seus dados.</p>
          </form>
        </div>
      </section>
    </>
  );
}

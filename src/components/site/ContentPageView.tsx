import type { ContentPage, Professional } from "@prisma/client";
import { TeamCard } from "@/components/site/TeamCard";

export function ContentPageView({ page, specialists, backHref, backLabel }: {
  page: ContentPage; specialists?: Professional[]; backHref: string; backLabel: string;
}) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href={backHref}>{backLabel}</a> › <span>{page.title}</span></p>
          <h1>{page.title}</h1>
          {page.tagline && <p className="lead">{page.tagline}</p>}
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar avaliação →</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="lead">{page.intro}</p>
          {page.highlights.length > 0 && (
            <ul className="check-list" style={{ marginTop: "1.5rem" }}>
              {page.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}
        </div>
      </section>
      {specialists && specialists.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <p className="kicker primary">Conheça quem cuida</p>
              <h2 className="display-md">Especialistas em {page.title}</h2>
            </div>
            <div className="team-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 240px))" }}>
              {specialists.map((p) => <TeamCard key={p.id} p={p} />)}
            </div>
          </div>
        </section>
      )}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Precisa deste cuidado para seu pet?</h2>
          <p>Nossa equipe orienta o melhor caminho. Fale agora pelo WhatsApp.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Falar no WhatsApp →</a>
            <a href="/contato" className="btn btn-outline">Falar com a recepção</a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { ContentPage, Professional } from "@prisma/client";
import { TeamCard } from "@/components/site/TeamCard";
import type { GalleryImage } from "@/lib/service-gallery";

const PawIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
    <circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" />
    <circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" />
    <path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" />
  </svg>
);

const ShieldHeartIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="M9.5 11.5c0-1 .8-1.6 1.5-1.6.5 0 .8.2 1 .5.2-.3.5-.5 1-.5.7 0 1.5.6 1.5 1.6 0 1.3-2.5 2.9-2.5 2.9s-2.5-1.6-2.5-2.9Z" />
  </svg>
);

const twoCol: React.CSSProperties = {
  display: "grid",
  gap: "2.5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
};

/** Painel de mídia do hero: usa a foto (coverUrl) ou um placeholder branded. */
function MediaPanel({ src, alt, objectPosition = "center" }: { src: string | null; alt: string; objectPosition?: string }) {
  return (
    <div
      style={{
        borderRadius: 28,
        overflow: "hidden",
        aspectRatio: "4 / 3",
        background: "linear-gradient(135deg, var(--cream), rgba(224,48,108,.12))",
        border: "1px solid var(--border)",
        display: "grid",
        placeItems: "center",
        boxShadow: "var(--shadow-petal, 0 20px 45px -20px rgba(224,48,108,.35))",
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition }} />
      ) : (
        <span style={{ color: "var(--primary)", opacity: 0.35, fontSize: "5rem", lineHeight: 0 }}>
          <PawIcon />
        </span>
      )}
    </div>
  );
}

export function ContentPageView({
  page,
  specialists,
  gallery,
  galleryTitle,
  gallerySubtitle,
  backHref,
  backLabel,
}: {
  page: ContentPage;
  specialists?: Professional[];
  /** Fotos do serviço; a primeira também vira capa do hero quando não há coverUrl. */
  gallery?: GalleryImage[];
  galleryTitle?: string;
  gallerySubtitle?: string;
  backHref: string;
  backLabel: string;
}) {
  const hasGallery = !!gallery && gallery.length > 0;
  const coverUrl = page.coverUrl ?? (hasGallery ? gallery[0].src : null);

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div style={{ ...twoCol, alignItems: "center" }}>
            <div>
              <p className="breadcrumb">
                <a href={backHref}>{backLabel}</a> › <span>{page.title}</span>
              </p>
              <h1>{page.title}</h1>
              {page.tagline && <p className="lead">{page.tagline}</p>}
              <div className="row gap wrap mt-lg">
                <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar avaliação →</a>
              </div>
            </div>
            <MediaPanel
              src={coverUrl}
              alt={page.title}
              objectPosition={page.coverUrl ? "center" : "center 28%"}
            />
          </div>
        </div>
      </section>

      {/* INTRO + DESTAQUES (2 colunas) */}
      <section className="section">
        <div className="container">
          <div style={{ ...twoCol, alignItems: "start" }}>
            <div>
              <p className="lead">{page.intro}</p>
              {page.highlights.length > 0 && (
                <ul className="checklist" style={{ marginTop: "1.75rem", gridTemplateColumns: "1fr" }}>
                  {page.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
            {/* Painel branded (preenche a coluna direita) */}
            <div
              style={{
                borderRadius: 28,
                padding: "2.75rem 2rem",
                background: "linear-gradient(135deg, rgba(224,48,108,.08), var(--cream))",
                border: "1px solid var(--border)",
                display: "grid",
                gap: "1rem",
                placeContent: "center",
                textAlign: "center",
                minHeight: 280,
              }}
            >
              <span style={{ color: "var(--primary)", fontSize: "3.25rem", lineHeight: 0, justifySelf: "center" }}>
                <ShieldHeartIcon />
              </span>
              <h3 style={{ fontSize: "1.35rem" }}>Atendimento 24h em Perdizes</h3>
              <p style={{ color: "var(--muted)", maxWidth: 340, margin: "0 auto" }}>
                Tecnologia, equipe especialista e o carinho de quem entende que seu pet é família.
              </p>
              <a href="https://wa.me/5511932565663" className="btn btn-outline" style={{ justifySelf: "center" }}>
                Fale no WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA DE FOTOS (quando a página tem acervo próprio) */}
      {hasGallery && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <p className="kicker primary">Galeria</p>
              <h2 className="display-md">{galleryTitle ?? <>Como seu pet <em>sai daqui.</em></>}</h2>
              {gallerySubtitle && <p className="lead">{gallerySubtitle}</p>}
            </div>
            {/* min(240px, 45%) => 2 colunas no celular e 4 no desktop, sem media query */}
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 45%), 1fr))" }}>
              {gallery.map((g) => (
                <figure key={g.src} style={{ margin: 0, position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.label} loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "3 / 4", objectFit: "cover" }} />
                  <figcaption style={{ position: "absolute", inset: "auto 0 0 0", background: "linear-gradient(transparent, rgba(94,19,49,.9))", color: "#fff", fontWeight: 700, fontSize: "clamp(.8rem, 2.4vw, .95rem)", lineHeight: 1.3, padding: "1.6rem .9rem .7rem" }}>{g.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ESPECIALISTAS DA ÁREA (só especialidades com match) */}
      {specialists && specialists.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <p className="kicker primary">Conheça quem cuida</p>
              <h2 className="display-md">Especialistas em {page.title}</h2>
            </div>
            <div className="team-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 240px))" }}>
              {specialists.map((p) => (
                <TeamCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
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

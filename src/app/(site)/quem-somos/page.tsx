import type { Metadata } from "next";
import { listPublicTeam } from "@/lib/professionals";
import { TeamCard } from "@/components/site/TeamCard";

export const metadata: Metadata = {
  title: "Quem Somos | Clinicat — Hospital Veterinário 24h em Perdizes",
  description:
    "Conheça a Clinicat: hospital veterinário 24h em Perdizes, SP. Nossa missão, equipe e tour virtual da estrutura completa para cães e gatos.",
};

export const dynamic = "force-dynamic";

export default async function QuemSomos() {
  const team = await listPublicTeam();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Quem Somos</span></p>
          <p className="kicker primary">Quem somos</p>
          <h1>Mais do que um centro veterinário, <em>um lugar de acolhimento.</em></h1>
          <p className="lead">Há 5 anos somos a primeira escolha de quem busca excelência, segurança e carinho para cães e gatos em Perdizes, São Paulo. Entendemos que, quando um pet precisa de atendimento, toda a família vive aquele momento junto — por isso acolhemos pacientes e também quem ama eles.</p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="container two-col">
        <div className="story-imgs">
          <img src="/assets/care-dog.jpg" alt="Cachorro sorrindo durante consulta" loading="lazy" />
          <img src="/assets/care-cat.jpg" alt="Gato acolhido com carinho" className="offset" loading="lazy" />
        </div>
        <div>
          <p className="kicker primary">Nossa essência</p>
          <h2 className="display-md">Cada vida <em>importa.</em></h2>
          <p>Nossa estrutura foi pensada para oferecer tudo o que seu pet precisa em um só lugar: atendimento 24 horas, laboratório próprio, exames rápidos, internação com suporte semi-intensivo e mais de 15 especialidades veterinárias.</p>
          <p>Tecnologia, experiência e uma equipe preparada para oferecer o melhor atendimento. Mas, acima de tudo, pessoas que entendem que seu pet é parte da sua família.</p>
          <div className="row gap mt-md"><span className="stars">★★★★★</span> <span className="muted">4,5 estrelas no Google · 698 avaliações</span></div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section section-soft">
        <div className="container">
          <div className="cards">
            <article className="card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
              <h3>Missão</h3>
              <p>Oferecer atendimento veterinário de excelência, acessível e humano, a qualquer hora do dia ou da noite.</p>
            </article>
            <article className="card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
              <h3>Visão</h3>
              <p>Ser referência em medicina veterinária na Zona Oeste de São Paulo, unindo tecnologia e empatia.</p>
            </article>
            <article className="card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z" /></svg></div>
              <h3>Valores</h3>
              <p>Respeito à vida animal, transparência com o tutor, atualização constante e acolhimento genuíno.</p>
            </article>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Nossa equipe</p>
            <h2 className="display-md">Profissionais que <em>amam</em> o que fazem.</h2>
            <p className="lead">Conheça quem cuida do seu pet todos os dias.</p>
          </div>
          <div className="team-grid">
            {team.map((p) => <TeamCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* TOUR VIRTUAL */}
      <section id="tour" className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Tour virtual</p>
            <h2 className="display-md">Conheça nossa estrutura <em>antes da visita.</em></h2>
            <p className="lead">Transparência reduz a insegurança — dê uma olhada nos nossos ambientes.</p>
          </div>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {[
              { src: "/estrutura/fachada.webp", label: "Fachada · 24 horas" },
              { src: "/estrutura/recepcao.webp", label: "Recepção" },
              { src: "/estrutura/sala-espera.webp", label: "Sala de espera" },
              { src: "/estrutura/consultorio-1.webp", label: "Consultório" },
              { src: "/estrutura/consultorio-2.webp", label: "Consultório" },
              { src: "/estrutura/centro-cirurgico.webp", label: "Centro cirúrgico" },
              { src: "/estrutura/internacao-1.webp", label: "Internação" },
              { src: "/estrutura/internacao-2.webp", label: "Internação" },
              { src: "/estrutura/ala-felina.webp", label: "Ala felina" },
              { src: "/estrutura/farmacia-loja.webp", label: "Farmácia & loja" },
              { src: "/estrutura/cantinho-cafe.webp", label: "Cantinho do café" },
            ].map((g) => (
              <figure key={g.src} style={{ margin: 0, position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.label} style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
                <figcaption style={{ position: "absolute", inset: "auto 0 0 0", background: "linear-gradient(transparent, rgba(94,19,49,.88))", color: "#fff", fontWeight: 700, fontSize: ".95rem", padding: "1.6rem .9rem .7rem" }}>{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Venha nos conhecer</h2>
          <p>Estamos em Perdizes, prontos para receber você e o seu pet 24 horas por dia.</p>
          <div className="row gap wrap">
            <a href="https://maps.google.com/?q=Av.+Professor+Alfonso+Bovero,+416,+São+Paulo" target="_blank" rel="noopener" className="btn btn-primary">Como chegar <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.1 5.5a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9L8.1 3.44a2 2 0 0 1 1.8 0Z" /><path d="M15 5.7v15" /><path d="M9 3.2v15" /></svg></a>
            <a href="https://wa.me/5511932565663" className="btn btn-outline">Falar conosco</a>
          </div>
        </div>
      </section>
    </>
  );
}

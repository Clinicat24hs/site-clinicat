import type { Metadata } from "next";
import { listPublicSpecialists } from "@/lib/professionals";
import { groupBySpecialty } from "@/lib/professionals-helpers";
import { TeamCard } from "@/components/site/TeamCard";

export const metadata: Metadata = {
  title: "Especialidades | Clinicat — 15+ especialidades veterinárias",
  description:
    "Mais de 15 especialidades veterinárias: cardiologia, ortopedia, dermatologia, oftalmologia, oncologia, nefrologia e muito mais, com especialistas de referência.",
};

export const dynamic = "force-dynamic";

export default async function Especialidades() {
  const specialists = await listPublicSpecialists();
  const groups = groupBySpecialty(specialists);

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Especialidades</span></p>
          <p className="kicker primary">Especialidades</p>
          <h1>Equipe de especialistas <em>referência</em> no Brasil.</h1>
          <p className="lead">A Clinicat conta com 15+ especialidades veterinárias, cada uma liderada por profissionais com anos de experiência e formação contínua. Nossos especialistas não apenas tratam — entendem que seu pet é parte da sua família e merece o melhor cuidado técnico aliado ao acolhimento genuíno.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Falar com um especialista →</a>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES EM DESTAQUE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Em destaque</p>
            <h2 className="display-md">Especialidades de <em>referência.</em></h2>
          </div>
          <div className="spec-grid">
            <article className="spec-card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z" /></svg></div>
              <span className="xp">15+ anos de experiência</span>
              <h3>Cardiologia</h3>
              <p>Diagnóstico e tratamento de arritmias, insuficiência cardíaca e outras condições cardiovasculares. Seu pet merece um coração saudável.</p>
            </article>
            <article className="spec-card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" /></svg></div>
              <span className="xp">12+ anos de experiência</span>
              <h3>Ortopedia</h3>
              <p>Cirurgias e tratamentos ortopédicos avançados: fraturas, displasias e ligamentos, com recuperação completa. Seu pet volta a correr e brincar.</p>
            </article>
            <article className="spec-card">
              <div className="ic"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></div>
              <span className="xp">10+ anos de experiência</span>
              <h3>Dermatologia</h3>
              <p>Tratamento de problemas de pele, alergias e infecções, com plano terapêutico personalizado. Seu pet fica com a pele saudável e bonita.</p>
            </article>
            <article className="spec-card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
              <span className="xp">8+ anos de experiência</span>
              <h3>Oftalmologia</h3>
              <p>Cuidados com a visão: cirurgias oftalmológicas, tratamento de cataratas e outras doenças oculares. Seu pet enxerga o mundo com clareza.</p>
            </article>
            <article className="spec-card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6" /><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" /></svg></div>
              <span className="xp">14+ anos de experiência</span>
              <h3>Oncologia</h3>
              <p>Tratamento de tumores e câncer com protocolos modernos: quimioterapia, radioterapia e cirurgias oncológicas. Seu pet tem chance de vencer essa batalha.</p>
            </article>
            <article className="spec-card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" /></svg></div>
              <span className="xp">11+ anos de experiência</span>
              <h3>Nefrologia</h3>
              <p>Especialista em doenças renais: tratamento de insuficiência renal, cálculos e outras condições urinárias. Seu pet vive mais e melhor.</p>
            </article>
          </div>

          <div className="center" style={{ marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.4rem" }}>E mais de 15 áreas de atuação</h3>
          </div>
          <ul className="chip-list">
            <li className="chip">Clínica Geral</li>
            <li className="chip">Anestesiologia</li>
            <li className="chip">Neurologia</li>
            <li className="chip">Endocrinologia</li>
            <li className="chip">Hematologia</li>
            <li className="chip">Gastroenterologia</li>
            <li className="chip">Pneumologia</li>
            <li className="chip">Nutrologia</li>
            <li className="chip">Odontologia</li>
            <li className="chip">Fisioterapia</li>
            <li className="chip">Acupuntura</li>
            <li className="chip">Medicina Felina</li>
            <li className="chip">Diagnóstico por Imagem</li>
          </ul>
        </div>
      </section>

      {/* NOSSOS ESPECIALISTAS */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Conheça quem cuida</p>
            <h2 className="display-md">Nossos <em>especialistas.</em></h2>
            <p className="lead">Profissionais de referência em cada área, prontos para cuidar do seu pet com técnica e acolhimento.</p>
          </div>
          {groups.map((g) => (
            <div key={g.specialty} style={{ marginTop: "2rem" }}>
              <h3 className="primary" style={{ marginBottom: "1rem" }}>{g.specialty}</h3>
              {/* auto-fill c/ largura máxima: evita o card gigante quando a área tem 1 especialista */}
              <div className="team-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 240px))" }}>
                {g.items.map((p) => <TeamCard key={p.id} p={p} />)}
              </div>
            </div>
          ))}
          <div className="center" style={{ marginTop: "2.5rem" }}>
            <a href="/quem-somos#equipe" className="btn btn-outline">Conhecer a equipe completa →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Seu pet precisa de um especialista?</h2>
          <p>Agende uma avaliação com a área certa. Nossa equipe orienta o melhor caminho para o tratamento.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar avaliação →</a>
            <a href="/contato" className="btn btn-outline">Falar com a recepção</a>
          </div>
        </div>
      </section>
    </>
  );
}

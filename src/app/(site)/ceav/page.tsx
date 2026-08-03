import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEAV | Clinicat — Educação continuada em medicina veterinária",
  description:
    "CEAV: cursos, eventos e networking em medicina veterinária. Educação continuada para profissionais que acreditam que conhecimento salva vidas.",
};

export default function Ceav() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>CEAV</span></p>
          <p className="kicker primary">CEAV</p>
          <h1>Educação continuada para a <em>medicina veterinária.</em></h1>
          <p className="lead">Cursos, eventos e networking para profissionais que, como nós, acreditam que conhecimento salva vidas. O CEAV nasce do compromisso da Clinicat com a evolução constante da medicina veterinária.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Quero saber das próximas turmas →</a>
          </div>
        </div>
      </section>

      {/* O QUE OFERECEMOS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">O que oferecemos</p>
            <h2 className="display-md">Conhecimento que <em>transforma</em> a prática.</h2>
          </div>
          <div className="cards">
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6" /><path d="M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></svg></div><h3>Cursos</h3><p>Formação prática e teórica em diversas áreas da medicina veterinária, com especialistas de referência.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div><h3>Eventos</h3><p>Palestras, workshops e encontros para atualização técnica e troca de experiências.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div><h3>Networking</h3><p>Uma comunidade de profissionais comprometidos com a excelência no cuidado animal.</p></article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Faça parte do CEAV</h2>
          <p>Receba em primeira mão a agenda de cursos e eventos. Conhecimento que salva vidas começa aqui.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Falar com o CEAV →</a>
            <a href="/contato" className="btn btn-outline">Entrar em contato</a>
          </div>
        </div>
      </section>
    </>
  );
}

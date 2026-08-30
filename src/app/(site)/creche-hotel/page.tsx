import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creche & Hotel | Clinicat — Hospedagem pet em Perdizes",
  description:
    "Creche e hotel pet em Perdizes com ambiente climatizado, monitoramento veterinário 24h, rotina diária, alimentação e vídeos do seu pet.",
};

export default function CrecheHotel() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Creche &amp; Hotel</span></p>
          <p className="kicker primary">Creche &amp; Hotel</p>
          <h1>Diversão, segurança e cuidado <em>enquanto você trabalha ou viaja.</em></h1>
          <p className="lead">Seu pet bem cuidado e acompanhado por equipe veterinária, em um ambiente climatizado, seguro e cheio de carinho. Você acompanha tudo de perto.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar visita →</a>
            <a href="tel:+551138657713" className="btn btn-outline">Tirar dúvidas · (11) 3865-7713</a>
          </div>
        </div>
      </section>

      {/* CRECHE vs HOTEL */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Dois serviços, um só cuidado</p>
            <h2 className="display-md">Escolha entre <em>Creche</em> e <em>Hotel</em>.</h2>
            <p className="lead">São serviços diferentes para necessidades diferentes. Você pode usar um, outro, ou os dois.</p>
          </div>
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Durante o dia</span>
              <h3 style={{ margin: 0 }}>Creche (day care)</h3>
              <p style={{ margin: 0 }}>
                Seu pet passa o <strong>dia</strong> conosco e volta para casa à noite. Ideal para quem trabalha fora e
                não quer o pet sozinho: convívio, atividades, descanso e supervisão o dia todo.
              </p>
              <ul style={{ margin: ".4rem 0 0", paddingLeft: "1.1rem", color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Entrada e saída no mesmo dia</li>
                <li>Diárias ou pacotes semanais</li>
                <li>Socialização e gasto de energia</li>
              </ul>
            </article>
            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Pernoite</span>
              <h3 style={{ margin: 0 }}>Hotel (hospedagem)</h3>
              <p style={{ margin: 0 }}>
                Seu pet <strong>dorme</strong> conosco por uma ou mais noites. Perfeito para viagens: hospedagem
                climatizada, rotina de alimentação e monitoramento veterinário 24h enquanto você está fora.
              </p>
              <ul style={{ margin: ".4rem 0 0", paddingLeft: "1.1rem", color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Estadia de uma ou mais noites</li>
                <li>Acompanhamento veterinário 24h</li>
                <li>Fotos e vídeos do seu pet</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">O que está incluso</p>
            <h2 className="display-md">Tudo pensado para o <em>bem-estar</em> do seu pet.</h2>
          </div>
          <div className="cards">
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg></div><h3>Rotina diária</h3><p>Atividades, descanso e alimentação organizados ao longo do dia, com supervisão constante.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 8-6 4 6 4V8Z" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg></div><h3>Vídeos dos pets</h3><p>Você acompanha o dia do seu pet com fotos e vídeos enviados pela equipe.</p></article>
            <article className="card"><div className="ic"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></div><h3>Adaptação</h3><p>Processo de adaptação respeitoso para que seu pet se sinta seguro e confortável.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2s2-.9 2-2V2" /><path d="M5 11v11" /><path d="M19 2c-1.66 0-3 2-3 5v6h3" /><path d="M19 2v20" /></svg></div><h3>Alimentação</h3><p>Alimentação adequada e supervisionada, respeitando a dieta de cada pet.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3v6a5 5 0 0 0 10 0V3" /><path d="M11 14v2a5 5 0 0 0 10 0v-3" /><circle cx="21" cy="11" r="2" /></svg></div><h3>Monitoramento</h3><p>Acompanhamento veterinário disponível 24h — segurança em primeiro lugar.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="1.5" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></svg></div><h3>Estrutura</h3><p>Ambiente climatizado, higienizado e preparado para o conforto de cães e gatos.</p></article>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Um dia na creche</p>
            <h2 className="display-md">Veja como é o <em>dia do seu pet</em> aqui.</h2>
            <p className="lead">Um pouquinho da rotina, das atividades e do carinho da nossa equipe.</p>
          </div>
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              position: "relative",
              aspectRatio: "16 / 9",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/LtcoEh0nLrA"
              title="Creche e Hotel · Clinicat"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Garanta a vaga do seu pet</h2>
          <p>Agende uma visita e conheça a estrutura. Seu pet fica feliz enquanto você trabalha ou viaja.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar visita →</a>
            <a href="https://maps.google.com/?q=Av.+Professor+Alfonso+Bovero,+416,+São+Paulo" target="_blank" rel="noopener" className="btn btn-outline">Como chegar <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.1 5.5a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9L8.1 3.44a2 2 0 0 1 1.8 0Z" /><path d="M15 5.7v15" /><path d="M9 3.2v15" /></svg></a>
          </div>
        </div>
      </section>
    </>
  );
}

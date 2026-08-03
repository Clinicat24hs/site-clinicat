import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinicat Cuida | Programa de cuidado contínuo para o seu pet",
  description:
    "Clinicat Cuida: prevenção, calendário de vacinação, dicas de saúde e benefícios exclusivos para cuidar do seu pet em todas as fases da vida.",
};

export default function ClinicatCuida() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Clinicat Cuida</span></p>
          <p className="kicker primary">Clinicat Cuida</p>
          <h1>Um programa para <em>cuidar do que importa.</em></h1>
          <p className="lead">Benefícios, prevenção e acompanhamento próximo para que seu pet tenha o melhor cuidado em todas as fases da vida. Mais do que tratar quando adoece — cuidar para que viva bem, sempre.</p>
          <div className="row gap wrap mt-lg">
            <a href="#cadastro" className="btn btn-primary">Quero participar →</a>
            <a href="https://wa.me/5511932565663" className="btn btn-outline">Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">O que você ganha</p>
            <h2 className="display-md">Cuidado contínuo, <em>prevenção</em> e tranquilidade.</h2>
          </div>
          <div className="cards">
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div><h3>Calendário de vacinação</h3><p>Lembretes e acompanhamento para manter a imunização do seu pet sempre em dia.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg></div><h3>Dicas de saúde</h3><p>Conteúdos práticos de prevenção, nutrição e bem-estar enviados para você.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" /></svg></div><h3>Promoções exclusivas</h3><p>Condições especiais em serviços e campanhas para quem é da família Clinicat.</p></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3v6a5 5 0 0 0 10 0V3" /><path d="M11 14v2a5 5 0 0 0 10 0v-3" /><circle cx="21" cy="11" r="2" /></svg></div><h3>Acompanhamento próximo</h3><p>Check-ups de rotina e monitoramento em todas as fases da vida do seu pet.</p></article>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Como funciona</p>
            <h2 className="display-md">Simples do começo ao fim.</h2>
          </div>
          <div className="steps">
            <div className="step"><h3>Cadastre-se</h3><p>Preencha seus dados e os do seu pet pelo formulário ou WhatsApp.</p></div>
            <div className="step"><h3>Receba o plano</h3><p>Montamos um calendário de cuidados personalizado para o seu pet.</p></div>
            <div className="step"><h3>Acompanhe</h3><p>Lembretes, dicas e check-ups para manter tudo em dia.</p></div>
            <div className="step"><h3>Cuide sempre</h3><p>Benefícios e prevenção contínua em todas as fases da vida.</p></div>
          </div>
        </div>
      </section>

      {/* CADASTRO */}
      <section id="cadastro" className="section">
        <div className="container">
          <div className="lead-band">
            <div>
              <p className="kicker peach">Faça parte</p>
              <h2 className="display-md">Cadastre seu pet no <em>Clinicat Cuida.</em></h2>
              <p>Cuidado preventivo e acompanhamento próximo para o seu melhor amigo.</p>
              <ul className="benefits">
                <li>Calendário de vacinação</li>
                <li>Dicas de saúde personalizadas</li>
                <li>Promoções e campanhas exclusivas</li>
                <li>Acompanhamento em todas as fases</li>
              </ul>
            </div>
            <form className="form-card" data-wpp-form data-wpp-phone="5511932565663">
              <div className="field"><label htmlFor="cc-nome">Seu nome</label><input id="cc-nome" name="nome" type="text" required placeholder="Nome e sobrenome" /></div>
              <div className="field"><label htmlFor="cc-tel">WhatsApp</label><input id="cc-tel" name="telefone" type="tel" required placeholder="(11) 90000-0000" /></div>
              <div className="field"><label htmlFor="cc-pet">Nome do pet</label><input id="cc-pet" name="pet" type="text" placeholder="Ex.: Nina" /></div>
              <input type="hidden" name="assunto" value="Quero participar do Clinicat Cuida" />
              <button type="submit" className="btn btn-primary block" style={{ justifyContent: "center", width: "100%" }}>Quero participar →</button>
              <p className="form-note">Ao enviar, abrimos uma conversa no WhatsApp já com seus dados.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

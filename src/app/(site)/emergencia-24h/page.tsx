import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergência Veterinária 24h em Perdizes | Clinicat",
  description:
    "Pronto-socorro veterinário 24h para cães e gatos em Perdizes, SP. Equipe de plantão, laboratório próprio e internação. Ligue (11) 3865-7713 e venha: Av. Professor Alfonso Bovero, 416.",
};

const SINAIS = [
  "Dificuldade para respirar ou gengiva roxa/pálida",
  "Convulsão ou desmaio",
  "Atropelamento, queda ou outro trauma",
  "Sangramento que não para",
  "Gato que tenta urinar e não consegue",
  "Ingestão de veneno, planta tóxica ou remédio humano",
  "Vômito ou diarreia repetidos, com prostração",
  "Barriga inchada e dura, com ânsia sem vomitar",
  "Parto que não evolui",
  "Pet muito abatido, que não levanta ou não reage",
];

const PASSOS = [
  { t: "Ligue antes de sair", d: "Conte o que está acontecendo. A equipe orienta como transportar o pet e já se prepara para recebê-lo." },
  { t: "Venha direto", d: "Estamos na Av. Professor Alfonso Bovero, 416, em Perdizes. Aberto 24 horas, todos os dias, inclusive feriados." },
  { t: "Avaliação na chegada", d: "O médico-veterinário de plantão avalia o pet e explica ao tutor os próximos passos e os exames necessários." },
  { t: "Exames e internação no local", d: "Laboratório próprio, exames de imagem e internação no mesmo endereço, sem precisar levar o pet a outro lugar." },
];

export default function Emergencia24h() {
  return (
    <>
      {/* PAGE HERO — telefone acima da dobra */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Emergência 24h</span></p>
          <p className="kicker primary">Pronto-socorro veterinário</p>
          <h1>Emergência veterinária <em>24 horas.</em></h1>
          <p className="lead">Cães e gatos atendidos a qualquer hora, todos os dias, por equipe de plantão em Perdizes. Em caso de urgência, ligue agora e venha.</p>
          <div className="row gap wrap mt-lg">
            <a href="tel:+551138657713" className="btn btn-primary">Ligar agora · (11) 3865-7713</a>
            <a href="https://maps.google.com/?q=Av.+Professor+Alfonso+Bovero,+416,+São+Paulo" target="_blank" rel="noopener" className="btn btn-outline">Como chegar →</a>
          </div>
          <p className="form-note" style={{ marginTop: "1rem" }}>Av. Professor Alfonso Bovero, 416 — Perdizes, São Paulo/SP · Aberto 24h, todos os dias</p>
        </div>
      </section>

      {/* SINAIS DE ALERTA */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Quando é emergência</p>
            <h2 className="display-md">Sinais para <em>não esperar.</em></h2>
            <p className="lead">Se o seu pet apresentar algum destes sinais, procure atendimento imediatamente. Na dúvida, ligue: a equipe ajuda a avaliar a urgência.</p>
          </div>
          <ul className="chip-list">
            {SINAIS.map((s) => (
              <li className="chip" key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Como funciona</p>
            <h2 className="display-md">Do telefonema ao <em>atendimento.</em></h2>
          </div>
          <div className="svc-list">
            {PASSOS.map((p, i) => (
              <article className="svc-item" key={p.t}>
                <span className="num">{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Estrutura</p>
            <h2 className="display-md">Tudo no <em>mesmo endereço.</em></h2>
          </div>
          <div className="cards">
            <article className="card"><h3>Plantão 24h</h3><p>Médicos-veterinários presentes a noite toda, nos fins de semana e feriados.</p></article>
            <article className="card"><h3>Laboratório próprio</h3><p>Exames laboratoriais e de imagem no local, para decisões rápidas.</p></article>
            <article className="card"><h3>Internação</h3><p>Internação com suporte semi-intensivo e monitoramento contínuo, com boletins ao tutor.</p></article>
          </div>
        </div>
      </section>

      {/* ONDE ESTAMOS */}
      <section className="section section-soft">
        <div className="container contact-grid">
          <div>
            <p className="kicker primary">Onde estamos</p>
            <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>Perdizes, <em>São Paulo.</em></h2>
            <ul className="info-list">
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></span><span><b>Endereço</b>Av. Professor Alfonso Bovero, 416 — Perdizes, São Paulo/SP — CEP 01254-000</span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></span><span><b>Horário</b>Aberto 24 horas, todos os dias</span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></span><span><b>Telefone</b><a href="tel:+551138657713">(11) 3865-7713</a></span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></span><span><b>WhatsApp</b><a href="https://wa.me/5511932565663" target="_blank" rel="noopener">(11) 93256-5663</a></span></li>
            </ul>
          </div>
          <div className="map-embed">
            <iframe title="Mapa da Clinicat" src="https://www.google.com/maps?q=Av.%20Professor%20Alfonso%20Bovero,%20416,%20S%C3%A3o%20Paulo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Seu pet precisa de atendimento agora?</h2>
          <p>Ligue para a Clinicat e venha. Estamos de plantão 24 horas, todos os dias.</p>
          <div className="row gap wrap">
            <a href="tel:+551138657713" className="btn btn-primary">Ligar · (11) 3865-7713</a>
            <a href="https://wa.me/5511932565663" className="btn btn-outline">WhatsApp →</a>
          </div>
        </div>
      </section>
    </>
  );
}

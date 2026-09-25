import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Castração | Clinicat — Veterinário 24h em Perdizes",
  description:
    "Castração de cães e gatos na Clinicat 24h: procedimento seguro com anestesia inalatória, equipe anestesista e cirurgião, exames pré-anestésicos e acompanhamento no pós-operatório.",
};

const BENEFICIOS = [
  { t: "Saúde", d: "Reduz o risco de algumas doenças, como infecções e tumores relacionados ao sistema reprodutor." },
  { t: "Comportamento", d: "Pode diminuir comportamentos ligados ao cio e ao instinto reprodutivo, como fugas e marcação de território." },
  { t: "Bem-estar", d: "Evita ninhadas indesejadas e contribui para uma vida mais tranquila e equilibrada." },
];

const ETAPAS = [
  { t: "Avaliação veterinária", d: "Antes do procedimento, o pet passa por avaliação clínica para verificar as condições de saúde." },
  { t: "Exames pré-anestésicos", d: "De acordo com a idade, o histórico e as condições do paciente, podem ser solicitados exames laboratoriais e/ou cardiológicos para a avaliação pré-anestésica." },
  { t: "Anestesia inalatória", d: "O paciente é anestesiado e acompanhado pelo médico-veterinário anestesista durante todo o procedimento." },
  { t: "Cirurgia", d: "O médico-veterinário cirurgião realiza o procedimento com técnica adequada e em ambiente controlado." },
  { t: "Recuperação e alta", d: "Após a cirurgia, o pet permanece em recuperação e é acompanhado pela equipe até apresentar condições adequadas para receber alta." },
  { t: "Retorno", d: "O tutor recebe orientações de pós-operatório e, quando necessário, é agendado o retorno para avaliação e retirada de pontos." },
];

const POS_OP = [
  "Manter o pet em repouso, evitando corridas e saltos",
  "Usar o colar protetor (elizabetano) conforme orientação",
  "Administrar a medicação prescrita nos horários indicados",
  "Manter o local da cirurgia limpo e seco",
  "Observar a ferida e procurar a clínica em caso de inchaço, secreção ou sangramento",
];

export default function Castracao() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <a href="/servicos">Serviços</a> › <span>Castração</span></p>
          <p className="kicker primary">Cirurgia veterinária</p>
          <h1>Castração de <em>cães e gatos.</em></h1>
          <p className="lead">A castração é um procedimento cirúrgico seguro que traz benefícios para a saúde e o bem-estar do seu pet. Na Clinicat 24h, é realizada com anestesia inalatória e acompanhamento de equipe veterinária do começo ao fim.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar avaliação →</a>
            <a href="tel:+551138657713" className="btn btn-outline">Tirar dúvidas · (11) 3865-7713</a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Por que castrar</p>
            <h2 className="display-md">Mais <em>saúde e qualidade de vida.</em></h2>
          </div>
          <div className="cards">
            {BENEFICIOS.map((b) => (
              <article className="card" key={b.t}><h3>{b.t}</h3><p>{b.d}</p></article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO É REALIZADO */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Como é realizado</p>
            <h2 className="display-md">Com <em>anestesia inalatória</em> e equipe dedicada.</h2>
            <p className="lead">O procedimento é feito em ambiente controlado, com protocolo anestésico adequado e monitorização dos parâmetros vitais do paciente.</p>
          </div>
          <div className="cards">
            <article className="card"><h3>🩺 Anestesista</h3><p>Médico-veterinário anestesista responsável pelo protocolo anestésico e pelo acompanhamento do paciente durante o procedimento.</p></article>
            <article className="card"><h3>🔪 Cirurgião</h3><p>Médico-veterinário cirurgião responsável pela realização do procedimento com técnica adequada.</p></article>
            <article className="card"><h3>📋 Monitorização</h3><p>Acompanhamento dos parâmetros vitais durante o procedimento, de acordo com as necessidades de cada paciente.</p></article>
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Passo a passo</p>
            <h2 className="display-md">Etapas do <em>procedimento.</em></h2>
          </div>
          <div className="svc-list">
            {ETAPAS.map((e, i) => (
              <article className="svc-item" key={e.t}>
                <span className="num">{i + 1}</span>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PÓS-OPERATÓRIO */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Depois da cirurgia</p>
            <h2 className="display-md">Cuidados no <em>pós-operatório.</em></h2>
          </div>
          <ul className="chip-list">
            {POS_OP.map((s) => (
              <li className="chip" key={s}>{s}</li>
            ))}
          </ul>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: "1.5rem" }}>
            A equipe orienta o tutor sobre todos os cuidados. Em caso de dúvida, fale com a Clinicat a qualquer hora — atendemos 24h.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Como agendar</h2>
          <p>Entre em contato com a Clinicat 24h pelo WhatsApp e agende uma avaliação. Nossa equipe orienta sobre exames necessários, preparo, valores e disponibilidade para o procedimento.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar pelo WhatsApp →</a>
            <a href="tel:+551138657713" className="btn btn-outline">Ligar · (11) 3865-7713</a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profilaxia Dentária (Tartarectomia) | Clinicat — Veterinário 24h",
  description:
    "Profilaxia dentária (tartarectomia) na Clinicat 24h: remoção de tártaro e placa bacteriana com anestesia inalatória, equipe anestesista e cirurgião geral, e monitorização dos parâmetros vitais.",
};

const ETAPAS = [
  { t: "Avaliação veterinária", d: "Antes do procedimento, o pet passa por avaliação clínica e odontológica." },
  { t: "Exames pré-anestésicos", d: "De acordo com a idade, histórico e condições de saúde do paciente, podem ser solicitados exames laboratoriais e/ou cardiológicos para avaliação pré-anestésica." },
  { t: "Anestesia inalatória", d: "O paciente é anestesiado e acompanhado pelo médico-veterinário anestesista durante todo o procedimento." },
  { t: "Limpeza dentária", d: "O cirurgião geral realiza a remoção do tártaro e da placa bacteriana, além da higienização dos dentes e avaliação das gengivas e da cavidade oral." },
  { t: "Avaliação dos dentes", d: "Podem ser identificadas alterações como doença periodontal, dentes fraturados, comprometidos ou com necessidade de extração. Havendo necessidade de procedimentos adicionais, o tutor será orientado." },
  { t: "Recuperação e alta", d: "Após o procedimento, o pet permanece em recuperação e é acompanhado pela equipe até apresentar condições adequadas para receber alta." },
];

const SINAIS = [
  "Mau hálito persistente",
  "Tártaro amarelado ou escuro",
  "Gengivas vermelhas ou sangrando",
  "Dificuldade ou dor para mastigar",
  "Salivação excessiva",
  "Dentes quebrados ou amolecidos",
  "Perda de dentes",
];

export default function Tartarectomia() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <a href="/servicos">Serviços</a> › <span>Profilaxia Dentária</span></p>
          <p className="kicker primary">Odontologia veterinária</p>
          <h1>Profilaxia Dentária <em>(Tartarectomia).</em></h1>
          <p className="lead">A saúde bucal é parte fundamental da saúde e da qualidade de vida do seu pet. O acúmulo de placa bacteriana e tártaro pode causar mau hálito, inflamação das gengivas, dor, doença periodontal e, em casos mais avançados, perda de dentes.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar avaliação →</a>
            <a href="tel:+551138657713" className="btn btn-outline">Tirar dúvidas · (11) 3865-7713</a>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">O que é</p>
            <h2 className="display-md">Limpeza completa e <em>avaliação da boca.</em></h2>
          </div>
          <p style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", color: "var(--muted)", lineHeight: 1.8 }}>
            A profilaxia dentária, também conhecida como tartarectomia, é o procedimento realizado para remover o tártaro
            e a placa bacteriana, permitindo uma limpeza adequada e uma avaliação completa da cavidade oral.
          </p>
        </div>
      </section>

      {/* COMO É REALIZADO */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Como é realizado</p>
            <h2 className="display-md">Com <em>anestesia inalatória</em> e equipe dedicada.</h2>
            <p className="lead">Na Clinicat 24h, a profilaxia dentária é realizada com anestesia inalatória, proporcionando condições adequadas para uma limpeza completa e segura.</p>
          </div>
          <div className="cards">
            <article className="card"><h3>🩺 Anestesista</h3><p>Médico-veterinário anestesista responsável pelo protocolo anestésico e pelo acompanhamento do paciente durante o procedimento.</p></article>
            <article className="card"><h3>🦷 Cirurgião geral</h3><p>Médico-veterinário cirurgião geral responsável pela profilaxia dentária e pela avaliação da cavidade oral e dos dentes.</p></article>
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

      {/* SINAIS DE ALERTA */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Fique atento</p>
            <h2 className="display-md">Quando seu pet precisa de uma <em>avaliação odontológica.</em></h2>
          </div>
          <ul className="chip-list">
            {SINAIS.map((s) => (
              <li className="chip" key={s}>{s}</li>
            ))}
          </ul>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: "1.5rem" }}>
            Não espere o problema avançar. A prevenção e o cuidado odontológico fazem parte da saúde do seu pet.
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

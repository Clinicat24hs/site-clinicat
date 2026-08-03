import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Clinicat — Centro Veterinário 24h em Perdizes",
  description:
    "Portfólio completo de serviços veterinários: consultas, cirurgias, internação 24h, exames, banho e tosa, farmácia, leva e traz, convênios e apoio psicológico.",
};

export default function Servicos() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Serviços</span></p>
          <p className="kicker primary">Serviços</p>
          <h1>Tudo o que seu pet precisa em <em>um só lugar.</em></h1>
          <p className="lead">A Clinicat 24hs oferece um portfólio completo de serviços veterinários, desde consultas de rotina até cirurgias de alta complexidade. Cada serviço é executado por especialistas experientes, com tecnologia moderna e acolhimento genuíno.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar agora →</a>
            <a href="tel:+551138657713" className="btn btn-outline">Emergência · (11) 3865-7713</a>
          </div>
        </div>
      </section>

      {/* LISTA DE SERVIÇOS */}
      <section className="section">
        <div className="container">
          <div className="svc-list">
            <article className="svc-item"><span className="num">1</span><h3>Consultas</h3><p>Avaliação completa do seu pet com especialistas. Diagnóstico preciso e plano de tratamento personalizado. Seu pet merece atenção total.</p></article>
            <article className="svc-item"><span className="num">2</span><h3>Cirurgias</h3><p>Procedimentos de alta complexidade realizados por cirurgiões experientes. De castrações a cirurgias ortopédicas avançadas. Segurança e excelência técnica garantidas.</p></article>
            <article className="svc-item"><span className="num">3</span><h3>Internação</h3><p>Acompanhamento 24h com equipe especializada. Seu pet recebe monitoramento contínuo, medicação e cuidados intensivos. Você pode visitar a qualquer hora.</p></article>
            <article className="svc-item"><span className="num">4</span><h3>Hotel / Creche</h3><p>Hospedagem segura e confortável. Ambiente climatizado, alimentação adequada e atividades recreativas. Seu pet fica feliz enquanto você trabalha. <a href="/creche-hotel" className="primary" style={{ fontWeight: 600 }}>Ver página →</a></p></article>
            <article className="svc-item"><span className="num">5</span><h3>Banho e Tosa</h3><p>Higiene e estética com profissionais experientes. Técnicas gentis que respeitam o bem-estar do seu pet. Seu pet sai bonito e feliz.</p></article>
            <article className="svc-item"><span className="num">6</span><h3>Exames</h3><p>Diagnóstico rápido e preciso com laboratório próprio. Exames de sangue, imagem e endoscopia disponíveis. Resultados em até 1 dia útil.</p></article>
            <article className="svc-item"><span className="num">7</span><h3>Farmácia</h3><p>Medicamentos veterinários com orientação especializada. Prescrição → compra → entrega, tudo em um só lugar. Conveniência e segurança garantidas.</p></article>
            <article className="svc-item"><span className="num">8</span><h3>Leva e Traz</h3><p>Transporte seguro para seu pet. Coleta em casa, atendimento na clínica e devolução com segurança. Comodidade para quem não tem tempo.</p></article>
            <article className="svc-item"><span className="num">9</span><h3>Convênio</h3><p>Parcerias com os principais convênios veterinários. Verifique cobertura e facilidades de pagamento. Atendimento acessível para sua família.</p></article>
            <article className="svc-item"><span className="num">10</span><h3>Apoio Psicológico</h3><p>Suporte emocional para tutores em momentos difíceis. Sessões com psicólogo especializado em luto animal. Você não está sozinho nessa jornada.</p></article>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Por que escolher a Clinicat</p>
            <h2 className="display-md">Diferenciais que <em>cuidam de verdade.</em></h2>
          </div>
          <ul className="checklist">
            <li>Atendimento 24 horas</li>
            <li>Hospital veterinário completo</li>
            <li>Laboratório próprio de exames</li>
            <li>Especialistas em diversas áreas</li>
            <li>Centro cirúrgico equipado</li>
            <li>Internação monitorada</li>
            <li>Hotel e creche pet</li>
            <li>Leva e Traz</li>
            <li>Atendimento humanizado</li>
            <li>Acompanhamento pós-consulta</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Pronto para cuidar do seu pet?</h2>
          <p>Escolha o serviço que seu pet precisa e agende agora. Estamos abertos 24 horas, todos os dias.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar pelo WhatsApp →</a>
            <a href="/contato" className="btn btn-outline">Falar com a recepção</a>
          </div>
        </div>
      </section>
    </>
  );
}

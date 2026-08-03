import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinicat — Hospital Veterinário 24h em Perdizes, São Paulo",
  description:
    "Hospital veterinário 24h em Perdizes, SP. Emergência, internação, UTI, 15+ especialidades, exames, cirurgia, banho e tosa, creche e hotel. Atendimento humanizado para cães e gatos.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-1" aria-hidden="true"></div>
        <div className="hero-bg-2" aria-hidden="true"></div>
        <div className="container hero-grid">
          <div>
            <span className="badge"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" /></svg> Atendimento 24h em Perdizes</span>
            <h1 className="display">Cuidado veterinário <em>completo</em>,<br />24 horas por dia.</h1>
            <p className="lead">Há 5 anos, somos a primeira escolha de quem busca excelência, segurança e acolhimento para cães e gatos. Tecnologia, equipe especialista e o carinho de quem entende: seu pet é família.</p>
            <div className="row gap wrap mt-lg">
              <a href="https://wa.me/5511932565663" className="btn btn-primary">Fale no WhatsApp →</a>
              <a href="tel:+551138657713" className="btn btn-outline">Emergência · (11) 3865-7713</a>
            </div>
            <div className="row gap mt-lg rating">
              <div className="avatars">
                <span className="av av-peach"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></span>
                <span className="av av-primary"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></span>
                <span className="av av-wine"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></span>
              </div>
              <span><strong>4,5 ★</strong> no Google · quase 700 famílias avaliaram</span>
            </div>
          </div>
          <div className="hero-img-wrap">
            <div className="hero-img-glow" aria-hidden="true"></div>
            <div className="hero-img-card">
              <img src="/assets/hero-vet.jpg" alt="Veterinária acolhendo cachorro e gato na Clinicat" />
            </div>
            <div className="hero-tooltip">
              <p className="kicker">Resposta rápida</p>
              <p>Equipe pronta agora — emergência sem espera.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="numeros" className="container stats-wrap">
        <div className="stats">
          <p className="kicker peach">Nossos números</p>
          <h2 className="display-md">Uma história <em>construída</em> com milhares de famílias.</h2>
          <div className="stats-grid">
            <div className="stat"><div className="stat-v">5</div><div className="stat-l">anos de atuação</div></div>
            <div className="stat"><div className="stat-v">14.297+</div><div className="stat-l">pets atendidos</div></div>
            <div className="stat"><div className="stat-v">10.634+</div><div className="stat-l">clientes acolhidos</div></div>
            <div className="stat"><div className="stat-v">1.100+</div><div className="stat-l">cirurgias realizadas</div></div>
            <div className="stat"><div className="stat-v">15+</div><div className="stat-l">especialidades</div></div>
            <div className="stat"><div className="stat-v">4,5 ★</div><div className="stat-l">Google · 698 avaliações</div></div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="container two-col">
        <div className="story-imgs">
          <img src="/assets/care-dog.jpg" alt="Cachorro sorrindo durante consulta" loading="lazy" />
          <img src="/assets/care-cat.jpg" alt="Gato acolhido com carinho" className="offset" loading="lazy" />
        </div>
        <div>
          <p className="kicker primary">Quem somos</p>
          <h2 className="display-md">Mais do que um centro veterinário, <em>um lugar de acolhimento.</em></h2>
          <p>Escolher onde confiar a saúde do seu pet é uma das decisões mais importantes que você pode tomar. Por isso, trabalhamos todos os dias para ser a primeira escolha de quem busca excelência, segurança e carinho.</p>
          <p>Nossa estrutura foi pensada para oferecer tudo o que seu pet precisa em um só lugar: atendimento 24 horas, laboratório próprio, exames rápidos, internação com suporte semi-intensivo e mais de 15 especialidades veterinárias.</p>
          <p className="row gap mt-md"><span className="stars">★★★★★</span> <span className="muted">4,5 estrelas no Google · 698 avaliações</span></p>
          <div className="row gap wrap mt-md">
            <a href="/quem-somos" className="btn btn-primary">Conheça a Clinicat →</a>
            <a href="/quem-somos#equipe" className="btn btn-outline">Nossa equipe</a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="services">
        <div className="container">
          <div className="services-head">
            <div>
              <p className="kicker primary">Serviços e especialidades</p>
              <h2 className="display-md">Cuidado completo em <em>cada fase</em> da vida do seu pet.</h2>
            </div>
            <p className="muted">Da rotina à emergência, da especialidade ao bem-estar — tudo em um só lugar.</p>
          </div>
          <div className="cards">
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z" /></svg></div><h3>Atendimento 24h</h3><p>Clínica, emergência, internação e UTI com equipe sempre presente.</p><ul><li>Clínico</li><li>Emergência</li><li>Internação</li><li>Intensivista</li></ul></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3v6a5 5 0 0 0 10 0V3" /><path d="M11 14v2a5 5 0 0 0 10 0v-3" /><circle cx="21" cy="11" r="2" /></svg></div><h3>Especialidades</h3><p>Mais de 15 áreas com especialistas dedicados ao seu pet.</p><ul><li>Cardio</li><li>Dermato</li><li>Neuro</li><li>Onco</li><li>Ortopedia</li><li>+9</li></ul></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg></div><h3>Cirurgia &amp; Anestesia</h3><p>Centro cirúrgico moderno com protocolos anestésicos seguros.</p><ul><li>Cirurgia geral</li><li>Especializada</li><li>Anestesiologia</li></ul></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><h3>Reabilitação</h3><p>Recuperação ativa com terapias integrativas e personalizadas.</p><ul><li>Fisioterapia</li><li>Acupuntura</li></ul></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3h14" /><path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M7.5 15h9" /></svg></div><h3>Diagnóstico &amp; Imagem</h3><p>Laboratório próprio e exames de imagem com resultados rápidos.</p><ul><li>Laboratorial</li><li>Ultrassom</li><li>Radiologia</li><li>Endoscopia</li><li>Patologia</li></ul></article>
            <article className="card"><div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="1.5" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></svg></div><h3>Bem-estar &amp; Hospedagem</h3><p>Conforto, carinho e supervisão veterinária no dia a dia.</p><ul><li>Banho e Tosa</li><li>Creche</li><li>Hotel</li></ul></article>
          </div>
          <div className="center" style={{ marginTop: "2.5rem" }}>
            <a href="/servicos" className="btn btn-primary">Ver todos os serviços →</a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section">
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

      {/* DIFFERENCE */}
      <section className="container two-col reverse-mobile">
        <div className="round-img">
          <img src="/assets/clinic-interior.jpg" alt="Interior da Clinicat em Perdizes" loading="lazy" />
        </div>
        <div>
          <p className="kicker primary">O que nos diferencia</p>
          <h2 className="display-md">Cada vida <em>importa</em>. Cada atendimento, uma chance de cuidar com excelência.</h2>
          <p>Tecnologia, experiência e uma equipe preparada para oferecer o melhor atendimento. Mas, acima de tudo, pessoas que entendem que seu pet é parte da sua família.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar consulta →</a>
            <a href="/especialidades" className="btn btn-outline">Ver especialidades</a>
          </div>
        </div>
      </section>

      {/* CEAV + CUIDA */}
      <section className="container blocks">
        <div id="ceav" className="block block-wine">
          <div className="ic peach"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.6 4.6L18 9.2l-4.4 1.6L12 15l-1.6-4.2L6 9.2l4.4-1.6Z" /><path d="M19 14l.7 2L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-1Z" /></svg></div>
          <h3>CEAV</h3>
          <p className="italic peach">Educação continuada para a medicina veterinária.</p>
          <p>Cursos, eventos e networking para profissionais que, como nós, acreditam que conhecimento salva vidas.</p>
          <a href="/ceav" className="link-underline">Conhecer o CEAV →</a>
        </div>
        <div id="cuida" className="block block-card">
          <div className="ic primary"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></div>
          <h3>Clinicat Cuida</h3>
          <p className="italic primary">Um programa para cuidar do que importa.</p>
          <p>Benefícios, prevenção e acompanhamento próximo para que seu pet tenha o melhor cuidado em todas as fases da vida.</p>
          <a href="/clinicat-cuida" className="link-underline primary">Saiba mais →</a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container" style={{ paddingBottom: "2rem" }}>
        <div className="cta-band">
          <p className="kicker primary">Estamos prontos agora</p>
          <h2 className="display-md">Seu pet precisa de cuidado? <em>Conte com a gente.</em></h2>
          <p>Atendemos 24 horas, todos os dias, em Perdizes. Fale com a nossa equipe pelo WhatsApp ou venha direto.</p>
          <div className="row gap wrap">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar pelo WhatsApp →</a>
            <a href="https://maps.google.com/?q=Av.+Professor+Alfonso+Bovero,+416,+São+Paulo" target="_blank" rel="noopener" className="btn btn-outline">Como chegar <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.1 5.5a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9L8.1 3.44a2 2 0 0 1 1.8 0Z" /><path d="M15 5.7v15" /><path d="M9 3.2v15" /></svg></a>
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo-stack-bg"><img src="/assets/logo-stacked.png" alt="Clinicat" /></div>
            <p>Cuidado veterinário completo, 24 horas por dia. Confiança construída por milhares de famílias em Perdizes, São Paulo.</p>
            <div className="row gap mt-md wrap">
              <a href="https://wa.me/5511932565663" className="btn btn-primary">Fale no WhatsApp</a>
              <a href="tel:+551138657713" className="btn btn-ghost">Ligar agora</a>
            </div>
          </div>
          <div>
            <p className="kicker peach">Contato</p>
            <ul className="footer-list">
              <li><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> Av. Professor Alfonso Bovero, 416 — Perdizes, SP</li>
              <li><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg> <a href="tel:+551138657713">(11) 3865-7713</a></li>
              <li><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg> <a href="https://wa.me/5511932565663">(11) 93256-5663</a></li>
              <li><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> Atendimento 24 horas, todos os dias</li>
              <li><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" /><circle cx="12" cy="13" r="3.2" /></svg> @clinicat24hs</li>
            </ul>
          </div>
          <div>
            <p className="kicker peach">Conheça</p>
            <ul className="footer-list links">
              <li><a href="/quem-somos">Quem somos</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/especialidades">Especialidades</a></li>
              <li><a href="/creche-hotel">Creche &amp; Hotel</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/pesquisa">Pesquisa de satisfação</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container row between wrap">
            <span>© <span id="year"></span> Clinicat. Todos os direitos reservados.</span>
            <span>Feito com carinho para quem cuida.</span>
          </div>
        </div>
      </footer>

      {/* BOTÕES DE CONVERSÃO */}
      <a href="https://wa.me/5511932565663" target="_blank" rel="noopener" className="wpp-float" aria-label="Fale no WhatsApp">
        <span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></span>
        <span className="txt">WhatsApp</span>
      </a>
      <div className="actionbar">
        <div className="inner">
          <a href="https://wa.me/5511932565663" className="btn btn-primary">Agendar agora</a>
          <a href="tel:+551138657713" className="btn btn-outline">Emergência 24h</a>
        </div>
      </div>
    </>
  );
}

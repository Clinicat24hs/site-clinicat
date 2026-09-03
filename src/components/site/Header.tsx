export function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container row between">
          <span className="hide-sm">Av. Professor Alfonso Bovero, 416 — Perdizes, São Paulo</span>
          <a href="tel:+551138657713" className="topbar-phone">
            <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg> (11) 3865-7713 · Atendimento 24h
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container row between gap">
          <a href="/" className="logo-link" aria-label="Clinicat">
            <img src="/assets/logo-horizontal.png" alt="Clinicat — Centro Veterinário 24h" className="logo" />
          </a>

          <nav className="nav-desktop" aria-label="Principal">
            <div className="nav-item">
              <button className="nav-btn">Atendimento</button>
              <div className="nav-menu">
                <a href="/servicos/consultas">Clínico</a><a href="/servicos/internacao">Emergência 24h</a>
                <a href="/servicos/internacao">Internação</a>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-btn">Especialidades</button>
              <div className="nav-menu">
                <a href="/especialidades/cardiologia">Cardiologia</a><a href="/especialidades/dermatologia">Dermatologia</a>
                <a href="/especialidades/oftalmologia">Oftalmologia</a><a href="/especialidades/oncologia">Oncologia</a>
                <a href="/especialidades/ortopedia">Ortopedia</a><a href="/especialidades/nefrologia">Nefrologia</a>
                <a href="/especialidades">Ver todas (15+)</a>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-btn">Serviços</button>
              <div className="nav-menu">
                <a href="/servicos/cirurgias">Cirurgia &amp; Anestesia</a><a href="/servicos/exames">Diagnóstico &amp; Exames</a>
                <a href="/servicos/banho-e-tosa">Banho e Tosa</a><a href="/servicos/farmacia">Farmácia</a>
                <a href="/servicos/leva-e-traz">Leva e Traz</a><a href="/servicos/convenio">Convênio</a>
              </div>
            </div>
            <a href="/creche-hotel" className="nav-btn">Creche &amp; Hotel</a>
            <div className="nav-item">
              <button className="nav-btn">Quem Somos</button>
              <div className="nav-menu">
                <a href="/quem-somos">Quem somos</a><a href="/quem-somos#equipe">Equipe</a>
                <a href="/quem-somos#tour">Tour Virtual</a><a href="/ceav">CEAV</a>
                <a href="/clinicat-cuida">Clinicat Cuida</a>
              </div>
            </div>
            <a href="/blog" className="nav-btn">Blog</a>
            <a href="/pesquisa" className="nav-btn">Pesquisa</a>
            <a href="/contato" className="nav-btn">Contato</a>
          </nav>

          <div className="row gap-sm">
            <a href="https://wa.me/5511932565663" target="_blank" rel="noopener" className="btn btn-primary hide-sm">Fale no WhatsApp</a>
            <button className="btn-icon nav-toggle" id="navToggle" aria-label="Abrir menu">☰</button>
          </div>
        </div>

        <div className="nav-mobile" id="navMobile" hidden>
          <div className="container nav-mobile-inner">
            <details><summary>Atendimento</summary><a href="/servicos/consultas">Clínico</a><a href="/servicos/internacao">Emergência 24h</a><a href="/servicos/internacao">Internação</a></details>
            <details><summary>Especialidades</summary><a href="/especialidades/cardiologia">Cardiologia</a><a href="/especialidades/dermatologia">Dermatologia</a><a href="/especialidades/oftalmologia">Oftalmologia</a><a href="/especialidades/oncologia">Oncologia</a><a href="/especialidades/ortopedia">Ortopedia</a><a href="/especialidades">Ver todas (15+)</a></details>
            <details><summary>Serviços</summary><a href="/servicos/cirurgias">Cirurgia &amp; Anestesia</a><a href="/servicos/exames">Diagnóstico &amp; Exames</a><a href="/servicos/banho-e-tosa">Banho e Tosa</a><a href="/servicos/farmacia">Farmácia</a><a href="/servicos/leva-e-traz">Leva e Traz</a><a href="/servicos/convenio">Convênio</a></details>
            <a href="/creche-hotel" className="mlink">Creche &amp; Hotel</a>
            <details><summary>Quem Somos</summary><a href="/quem-somos">Quem somos</a><a href="/quem-somos#equipe">Equipe</a><a href="/quem-somos#tour">Tour Virtual</a><a href="/ceav">CEAV</a><a href="/clinicat-cuida">Clinicat Cuida</a></details>
            <a href="/blog" className="mlink">Blog</a>
            <a href="/pesquisa" className="mlink">Pesquisa</a>
            <a href="/contato" className="mlink">Contato</a>
            <a href="https://wa.me/5511932565663" className="btn btn-primary block">Fale no WhatsApp</a>
          </div>
        </div>
      </header>
    </>
  );
}

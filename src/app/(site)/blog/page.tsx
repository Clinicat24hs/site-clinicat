import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Veterinário | Clinicat — Dicas de saúde para pets",
  description:
    "Blog veterinário da Clinicat: emergências, vacinação, castração, gatos, cães, filhotes, pets idosos, nutrição e saúde preventiva.",
};

export default function Blog() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Blog</span></p>
          <p className="kicker primary">Blog veterinário</p>
          <h1>Conteúdo especializado para <em>quem ama pets.</em></h1>
          <p className="lead">Dicas, prevenção e orientações dos nossos especialistas. Informação de confiança para cuidar melhor do seu cão ou gato no dia a dia.</p>
        </div>
      </section>

      {/* CATEGORIAS + POSTS */}
      <section className="section">
        <div className="container">
          <ul className="cat-list">
            <li className="cat-pill">Emergências Veterinárias</li>
            <li className="cat-pill">Saúde Preventiva</li>
            <li className="cat-pill">Vacinação</li>
            <li className="cat-pill">Castração</li>
            <li className="cat-pill">Gatos</li>
            <li className="cat-pill">Cães</li>
            <li className="cat-pill">Filhotes</li>
            <li className="cat-pill">Pets Idosos</li>
            <li className="cat-pill">Nutrição</li>
            <li className="cat-pill">Comportamento</li>
          </ul>

          <div className="blog-grid">
            <article className="post"><div className="post-thumb"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg></div><div className="body"><span className="cat">Emergências</span><h3>Quando levar meu pet para a emergência?</h3><p>Sinais de alerta que indicam que seu cão ou gato precisa de atendimento imediato — não espere para agir.</p><a href="https://wa.me/5511932565663" className="link-underline primary">Em breve · falar com a equipe →</a></div></article>
            <article className="post"><div className="post-thumb"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></div><div className="body"><span className="cat">Gatos</span><h3>Meu gato parou de comer. O que fazer?</h3><p>Entenda as principais causas da falta de apetite em felinos e quando isso vira urgência.</p><a href="https://wa.me/5511932565663" className="link-underline primary">Em breve · falar com a equipe →</a></div></article>
            <article className="post"><div className="post-thumb"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></div><div className="body"><span className="cat">Cães</span><h3>Como identificar dor em cães?</h3><p>Cães escondem a dor por instinto. Veja os sinais sutis que todo tutor deve reconhecer.</p><a href="https://wa.me/5511932565663" className="link-underline primary">Em breve · falar com a equipe →</a></div></article>
            <article className="post"><div className="post-thumb"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg></div><div className="body"><span className="cat">Castração</span><h3>Castração: benefícios e cuidados</h3><p>Por que castrar, qual a melhor idade e como cuidar do seu pet no pós-operatório.</p><a href="https://wa.me/5511932565663" className="link-underline primary">Em breve · falar com a equipe →</a></div></article>
            <article className="post"><div className="post-thumb"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" /></svg></div><div className="body"><span className="cat">Saúde Preventiva</span><h3>Doação de sangue salva vidas</h3><p>Como funciona a doação de sangue em pets e por que ela é tão importante.</p><a href="https://wa.me/5511932565663" className="link-underline primary">Em breve · falar com a equipe →</a></div></article>
            <article className="post"><div className="post-thumb"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /><path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" /></svg></div><div className="body"><span className="cat">Vacinação</span><h3>Calendário de vacinação do seu pet</h3><p>Quais vacinas são essenciais para cães e gatos e quando cada uma deve ser aplicada.</p><a href="https://wa.me/5511932565663" className="link-underline primary">Em breve · falar com a equipe →</a></div></article>
          </div>
        </div>
      </section>

      {/* CAPTAÇÃO DE LEADS */}
      <section className="container section">
        <div className="lead-band">
          <div>
            <p className="kicker peach">Newsletter</p>
            <h2 className="display-md">Receba <em>dicas gratuitas</em> de saúde pet.</h2>
            <p>Cadastre-se e receba conteúdos, lembretes e promoções direto no seu WhatsApp e e-mail.</p>
            <ul className="benefits">
              <li>Calendário de vacinação</li>
              <li>Dicas de saúde</li>
              <li>Promoções exclusivas</li>
              <li>Campanhas da Clinicat</li>
            </ul>
          </div>
          <form className="form-card" data-wpp-form data-wpp-phone="5511932565663">
            <div className="field"><label htmlFor="bl-nome">Nome</label><input id="bl-nome" name="nome" type="text" required placeholder="Seu nome" /></div>
            <div className="field"><label htmlFor="bl-tel">WhatsApp</label><input id="bl-tel" name="telefone" type="tel" required placeholder="(11) 90000-0000" /></div>
            <div className="field"><label htmlFor="bl-email">E-mail</label><input id="bl-email" name="email" type="email" placeholder="voce@email.com" /></div>
            <div className="field"><label htmlFor="bl-pet">Nome do pet</label><input id="bl-pet" name="pet" type="text" placeholder="Ex.: Thor" /></div>
            <input type="hidden" name="assunto" value="Quero receber dicas de saúde pet" />
            <button type="submit" className="btn btn-primary block" style={{ justifyContent: "center", width: "100%" }}>Quero receber →</button>
            <p className="form-note">Ao enviar, abrimos uma conversa no WhatsApp já com seus dados.</p>
          </form>
        </div>
      </section>
    </>
  );
}

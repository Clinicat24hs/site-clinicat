import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Clinicat — Veterinário 24h em Perdizes, SP",
  description:
    "Fale com a Clinicat: WhatsApp, telefone, e-mail, endereço e mapa em Perdizes, SP. Tire dúvidas no FAQ e agende o atendimento do seu pet. Aberto 24h.",
};

export default function Contato() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Contato</span></p>
          <p className="kicker primary">Contato</p>
          <h1>Fale com a <em>Clinicat.</em></h1>
          <p className="lead">Estamos abertos 24 horas, todos os dias. Para emergências, ligue agora. Para agendamentos e dúvidas, use o formulário ou o WhatsApp.</p>
          <div className="row gap wrap mt-lg">
            <a href="https://wa.me/5511932565663" className="btn btn-primary">WhatsApp →</a>
            <a href="tel:+551138657713" className="btn btn-outline">Ligar · (11) 3865-7713</a>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO + INFO */}
      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="kicker primary">Envie uma mensagem</p>
            <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>Como podemos ajudar?</h2>
            <form className="form-card" data-wpp-form data-wpp-phone="5511932565663">
              <div className="field"><label htmlFor="ct-nome">Nome</label><input id="ct-nome" name="nome" type="text" required placeholder="Seu nome" /></div>
              <div className="field"><label htmlFor="ct-tel">Telefone / WhatsApp</label><input id="ct-tel" name="telefone" type="tel" required placeholder="(11) 90000-0000" /></div>
              <div className="field"><label htmlFor="ct-pet">Nome do pet</label><input id="ct-pet" name="pet" type="text" placeholder="Ex.: Nina" /></div>
              <div className="field"><label htmlFor="ct-assunto">Assunto</label>
                <select id="ct-assunto" name="assunto">
                  <option>Agendar consulta</option>
                  <option>Exames</option>
                  <option>Banho e Tosa</option>
                  <option>Hotel / Creche</option>
                  <option>Internação / boletim médico</option>
                  <option>Convênios e pagamento</option>
                  <option>Outro assunto</option>
                </select>
              </div>
              <div className="field"><label htmlFor="ct-msg">Mensagem</label><textarea id="ct-msg" name="mensagem" rows={4} placeholder="Como podemos ajudar você e seu pet?"></textarea></div>
              <button type="submit" className="btn btn-primary block" style={{ justifyContent: "center", width: "100%" }}>Enviar pelo WhatsApp →</button>
              <p className="form-note">O formulário abre uma conversa no WhatsApp já com seus dados preenchidos.</p>
            </form>
          </div>

          <div>
            <p className="kicker primary">Atendimento</p>
            <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>Onde estamos</h2>
            <ul className="info-list">
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></span><span><b>Endereço</b>Av. Professor Alfonso Bovero, 416 — Perdizes, São Paulo/SP — CEP 01254-000</span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></span><span><b>Horário</b>Aberto 24 horas, todos os dias</span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></span><span><b>Telefone</b><a href="tel:+551138657713">(11) 3865-7713</a></span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></span><span><b>WhatsApp</b><a href="https://wa.me/5511932565663" target="_blank" rel="noopener">(11) 93256-5663</a></span></li>
              <li><span className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" /><circle cx="12" cy="13" r="3.2" /></svg></span><span><b>Instagram</b>@clinicat24hs</span></li>
            </ul>
            <div className="map-embed">
              <iframe title="Mapa da Clinicat" src="https://www.google.com/maps?q=Av.%20Professor%20Alfonso%20Bovero,%20416,%20S%C3%A3o%20Paulo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <a href="https://maps.google.com/?q=Av.+Professor+Alfonso+Bovero,+416,+São+Paulo" target="_blank" rel="noopener" className="btn btn-outline mt-md">Como chegar <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.1 5.5a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9L8.1 3.44a2 2 0 0 1 1.8 0Z" /><path d="M15 5.7v15" /><path d="M9 3.2v15" /></svg></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Dúvidas frequentes</p>
            <h2 className="display-md">FAQ — <em>perguntas frequentes.</em></h2>
          </div>
          <div className="faq">
            <details><summary>Aceita cartão?</summary><p>Sim. Aceitamos as principais bandeiras de cartão de crédito e débito, além de Pix e dinheiro.</p></details>
            <details><summary>Faz parcelamento?</summary><p>Sim, oferecemos opções de parcelamento para procedimentos e cirurgias. Consulte as condições com a recepção.</p></details>
            <details><summary>Convênios (Dog Life / Pet Life)</summary><p>Todas as cobranças e coberturas relacionadas aos convênios são de responsabilidade exclusiva do plano contratado. O hospital não se responsabiliza por autorizações, glosas ou limitações de cobertura. Para dúvidas sobre esse assunto, entre em contato diretamente com a central de atendimento do seu plano.</p></details>
            <details><summary>Como funciona a internação?</summary><p>A internação conta com acompanhamento 24h, monitoramento contínuo, medicação e cuidados intensivos por equipe especializada.</p></details>
            <details><summary>Posso visitar meu pet internado?</summary><p>Sim, mas as visitas devem ser <strong>agendadas previamente</strong>, em um dos seguintes períodos: das 10h às 11h30 ou das 17h às 19h30.</p></details>
            <details><summary>Como recebo os boletins médicos?</summary><p>Enviamos atualizações periódicas sobre o estado do seu pet por WhatsApp e mantemos contato direto com o tutor.</p></details>
            <details><summary>Existe estacionamento?</summary><p>Informe-se com a recepção sobre as opções de estacionamento na região de Perdizes próximas à clínica.</p></details>
            <details><summary>Faz atendimento domiciliar?</summary><p>Oferecemos o serviço de Leva e Traz e, em casos específicos, atendimento domiciliar. Consulte a disponibilidade pelo WhatsApp.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}

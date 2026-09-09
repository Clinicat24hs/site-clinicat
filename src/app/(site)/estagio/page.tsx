import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estágio | Clinicat — Hospital Veterinário 24h em Perdizes",
  description:
    "Vagas de estágio em medicina veterinária na Clinicat, em Perdizes. Rotina de clínica médica, emergência, internação e cirurgia, com supervisão de médica veterinária. Estágio não remunerado.",
};

export default function Estagio() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Estágio</span></p>
          <p className="kicker primary">Programa de estágio</p>
          <h1>Aprenda a rotina de um hospital veterinário <em>24 horas.</em></h1>
          <p className="lead">Na Clinicat você acompanha atendimento, internação, cirurgia e especialidades no dia a dia real, com supervisão de médica veterinária. É onde a teoria da faculdade encontra o paciente.</p>
          <div className="row gap wrap mt-lg">
            <a href="#inscricao" className="btn btn-primary">Fazer minha inscrição →</a>
            <a href="#duvidas" className="btn btn-outline">Tirar dúvidas antes</a>
          </div>
        </div>
      </section>

      {/* AVISO DE TRANSPARÊNCIA */}
      <section className="section" style={{ paddingTop: "1.5rem", paddingBottom: 0 }}>
        <div className="container">
          <article
            className="card"
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              borderLeft: "4px solid var(--primary)",
            }}
          >
            <h3 style={{ margin: 0 }}>Antes de se inscrever, um ponto importante</h3>
            <p style={{ margin: 0 }}>
              Este é um <strong>estágio não remunerado e sem auxílio de custo</strong>. Não há bolsa,
              vale-transporte ou vale-refeição. Preferimos deixar isso claro logo no começo, para que
              você decida com a informação na mão e ninguém perca tempo — nem você, nem a gente.
            </p>
            <p style={{ margin: 0 }}>
              O que oferecemos é rotina hospitalar de verdade, acompanhamento de casos do início ao
              fim e material de apoio enviado ao nosso grupo de estagiários.
            </p>
          </article>
        </div>
      </section>

      {/* O QUE VOCÊ VAI FAZER */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">O dia a dia</p>
            <h2 className="display-md">O que você vai <em>fazer</em> aqui.</h2>
            <p className="lead">O estágio acompanha a rotina do hospital. Você circula pelos setores e participa das atividades sob supervisão.</p>
          </div>

          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Atividades</span>
              <h3 style={{ margin: 0 }}>Suas responsabilidades</h3>
              <ul className="checklist" style={{ margin: 0 }}>
                <li>Realização de parâmetros básicos</li>
                <li>Acompanhamento de atendimentos</li>
                <li>Acompanhamento de cirurgias</li>
                <li>Consultas com médicos especialistas</li>
                <li>Auxílio na contenção para procedimentos</li>
              </ul>
            </article>

            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Setores</span>
              <h3 style={{ margin: 0 }}>Onde você vai atuar</h3>
              <ul className="checklist" style={{ margin: 0 }}>
                <li>Internação</li>
                <li>Atendimento clínico</li>
                <li>Centro cirúrgico</li>
                <li>Especialidades</li>
              </ul>
              <p style={{ margin: ".4rem 0 0", color: "var(--muted)" }}>
                O setor de atuação é definido junto com a supervisão, conforme o seu período no curso.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* HORÁRIOS */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Carga horária</p>
            <h2 className="display-md">Quando você <em>estagia</em>.</h2>
            <p className="lead">De segunda a sexta, em um dos dois turnos, mais um final de semana por mês.</p>
          </div>

          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", maxWidth: "52rem", margin: "0 auto" }}>
            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Turno da manhã</span>
              <p className="display-md" style={{ margin: 0, fontSize: "1.9rem" }}>8h às 14h</p>
              <p style={{ margin: 0, color: "var(--muted)" }}>Segunda a sexta-feira</p>
            </article>
            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Turno da tarde</span>
              <p className="display-md" style={{ margin: 0, fontSize: "1.9rem" }}>14h às 20h</p>
              <p style={{ margin: 0, color: "var(--muted)" }}>Segunda a sexta-feira</p>
            </article>
            <article className="card" style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
              <span className="chip" style={{ alignSelf: "flex-start" }}>Final de semana</span>
              <p className="display-md" style={{ margin: 0, fontSize: "1.9rem" }}>1 por mês</p>
              <p style={{ margin: 0, color: "var(--muted)" }}>Faz parte da escala regular</p>
            </article>
          </div>

          <p style={{ maxWidth: "48rem", margin: "1.5rem auto 0", textAlign: "center", color: "var(--muted)" }}>
            Candidaturas para estagiar <strong>apenas em finais de semana</strong> são avaliadas caso a caso —
            conte a sua situação no campo de disponibilidade do formulário.
          </p>
        </div>
      </section>

      {/* SUPERVISÃO */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Quem acompanha você</p>
            <h2 className="display-md">Supervisão <em>responsável.</em></h2>
          </div>

          <article className="card" style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: ".7rem" }}>
            <div>
              <h3 style={{ margin: 0 }}>Dra. Anna Therra Bernaba Leite de Souza</h3>
              <p className="team-crmv" style={{ margin: ".2rem 0 0" }}>CRMV-SP 25583</p>
            </div>
            <p style={{ margin: 0 }}>
              Responsável pelos setores de <strong>clínica médica, emergência, internação, cuidados
              intensivos e anestesiologia</strong>. São 16 anos de experiência desde a graduação
              (UNIP, 2008).
            </p>
            <ul className="checklist" style={{ margin: 0 }}>
              <li>Pós-graduação em Emergência e Intensivismo (Equalis)</li>
              <li>Certificação ABC Trauma (LAVECCS)</li>
              <li>Certificação em Cuidados Intensivos (LAVECCS)</li>
            </ul>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft" id="duvidas">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Perguntas frequentes</p>
            <h2 className="display-md">O que os candidatos <em>mais perguntam.</em></h2>
          </div>

          <div className="faq">
            <details>
              <summary>Qual é a estrutura da clínica, quais setores existem e em qual eu vou atuar?</summary>
              <p>
                O hospital tem internação, atendimento clínico, centro cirúrgico e especialidades. O
                setor onde você vai atuar é definido junto com a supervisão, considerando o período
                que você está cursando.
              </p>
            </details>

            <details>
              <summary>Quais serão minhas principais atividades e responsabilidades?</summary>
              <p>
                Realização de parâmetros básicos, acompanhamento de atendimentos, cirurgias e
                consultas com especialistas, e auxílio na contenção para procedimentos — sempre sob
                supervisão.
              </p>
            </details>

            <details>
              <summary>Qual é a carga horária e quais dias eu vou trabalhar?</summary>
              <p>
                De segunda a sexta-feira, em um dos dois turnos: manhã das 8h às 14h, ou tarde das 14h
                às 20h. A escala inclui um final de semana por mês. Estágios apenas em finais de
                semana são avaliados caso a caso.
              </p>
            </details>

            <details>
              <summary>Quem será meu supervisor responsável, qual sua formação e CRMV?</summary>
              <p>
                Dra. Anna Therra Bernaba Leite de Souza, CRMV-SP 25583, responsável pelos setores de
                clínica médica, emergência, internação, cuidados intensivos e anestesiologia. Formada
                pela UNIP em 2008, com 16 anos de experiência, pós-graduação em Emergência e
                Intensivismo pela Equalis e certificações ABC Trauma e Cuidados Intensivos pela
                LAVECCS.
              </p>
            </details>

            <details>
              <summary>A clínica fornece materiais de apoio ou algum tipo de auxílio?</summary>
              <p>
                O estágio é não remunerado e não há auxílio de custo. Materiais de apoio são enviados
                em PDF no nosso grupo de estagiários.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="section" id="inscricao">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Inscrição</p>
            <h2 className="display-md">Conte pra gente <em>quem é você.</em></h2>
            <p className="lead">Preencha os campos abaixo. Ao enviar, abrimos uma conversa no WhatsApp já com suas respostas — é lá que você anexa o currículo.</p>
          </div>

          <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
            <form className="form-card" data-wpp-form data-wpp-phone="5511932565663">
              <input type="hidden" name="assunto" value="Inscrição para estágio" />

              <div className="field">
                <label htmlFor="es-nome">Nome completo</label>
                <input id="es-nome" name="nome" type="text" required placeholder="Seu nome e sobrenome" />
              </div>

              <div className="field">
                <label htmlFor="es-email">E-mail</label>
                <input id="es-email" name="email" type="email" required placeholder="voce@email.com" />
              </div>

              <div className="field">
                <label htmlFor="es-tel">Telefone / WhatsApp</label>
                <input id="es-tel" name="telefone" type="tel" required placeholder="(11) 90000-0000" />
              </div>

              <div className="field">
                <label htmlFor="es-inst">Instituição de ensino</label>
                <input id="es-inst" name="instituicao" type="text" required placeholder="Ex.: UNIP, USP, Anhembi Morumbi" />
              </div>

              <div className="field">
                <label htmlFor="es-periodo">Período que está cursando</label>
                <input id="es-periodo" name="periodo" type="text" required placeholder="Ex.: 6º semestre" />
              </div>

              <div className="field">
                <label htmlFor="es-expect">Quais são suas principais expectativas de aprendizado?</label>
                <textarea
                  id="es-expect"
                  name="expectativas"
                  rows={3}
                  required
                  placeholder="O que você espera desenvolver durante o estágio?"
                ></textarea>
              </div>

              <div className="field">
                <label htmlFor="es-disp">Qual é a sua disponibilidade de horários?</label>
                <textarea
                  id="es-disp"
                  name="disponibilidade"
                  rows={3}
                  required
                  placeholder="Inclua períodos (manhã / tarde), finais de semana e possíveis restrições."
                ></textarea>
              </div>

              <div className="field">
                <label htmlFor="es-exp">Você já tem experiência prática com animais ou ambiente clínico?</label>
                <textarea
                  id="es-exp"
                  name="experiencia"
                  rows={3}
                  placeholder="Pode ser voluntariado, cuidados pessoais ou atividades acadêmicas. Se não tiver, tudo bem — escreva isso."
                ></textarea>
              </div>

              <div className="field">
                <label htmlFor="es-contrib">Como você acredita que pode contribuir com a nossa equipe?</label>
                <textarea
                  id="es-contrib"
                  name="contribuicao"
                  rows={3}
                  required
                  placeholder="O que você traz para o time?"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary block" style={{ justifyContent: "center", width: "100%" }}>
                Enviar inscrição pelo WhatsApp →
              </button>

              <p className="form-note">
                📎 <strong>Não esqueça do currículo.</strong> Assim que a conversa abrir no WhatsApp,
                anexe seu currículo em PDF na mesma mensagem. Sem ele a inscrição fica incompleta.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2 className="display-md">Ficou alguma dúvida antes de se inscrever?</h2>
            <p className="lead">Fale com a nossa recepção — respondemos sobre vagas, setores e escala.</p>
            <div className="row gap wrap center mt-md">
              <a href="https://wa.me/5511932565663" className="btn btn-primary">Falar no WhatsApp</a>
              <a href="tel:+551138657713" className="btn btn-outline">(11) 3865-7713</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

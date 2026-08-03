import type { Metadata } from "next";
import { listPublicTeam } from "@/lib/professionals";
import { TeamCard } from "@/components/site/TeamCard";

export const metadata: Metadata = {
  title: "Quem Somos | Clinicat — Hospital Veterinário 24h em Perdizes",
  description:
    "Conheça a Clinicat: hospital veterinário 24h em Perdizes, SP. Nossa missão, equipe e tour virtual da estrutura completa para cães e gatos.",
};

export const dynamic = "force-dynamic";

export default async function QuemSomos() {
  const team = await listPublicTeam();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><a href="/">Início</a> › <span>Quem Somos</span></p>
          <p className="kicker primary">Quem somos</p>
          <h1>Mais do que um centro veterinário, <em>um lugar de acolhimento.</em></h1>
          <p className="lead">Há 5 anos somos a primeira escolha de quem busca excelência, segurança e carinho para cães e gatos em Perdizes, São Paulo. Entendemos que, quando um pet precisa de atendimento, toda a família vive aquele momento junto — por isso acolhemos pacientes e também quem ama eles.</p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="container two-col">
        <div className="story-imgs">
          <img src="/assets/care-dog.jpg" alt="Cachorro sorrindo durante consulta" loading="lazy" />
          <img src="/assets/care-cat.jpg" alt="Gato acolhido com carinho" className="offset" loading="lazy" />
        </div>
        <div>
          <p className="kicker primary">Nossa essência</p>
          <h2 className="display-md">Cada vida <em>importa.</em></h2>
          <p>Nossa estrutura foi pensada para oferecer tudo o que seu pet precisa em um só lugar: atendimento 24 horas, laboratório próprio, exames rápidos, internação com suporte semi-intensivo e mais de 15 especialidades veterinárias.</p>
          <p>Tecnologia, experiência e uma equipe preparada para oferecer o melhor atendimento. Mas, acima de tudo, pessoas que entendem que seu pet é parte da sua família.</p>
          <div className="row gap mt-md"><span className="stars">★★★★★</span> <span className="muted">4,5 estrelas no Google · 698 avaliações</span></div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section section-soft">
        <div className="container">
          <div className="cards">
            <article className="card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
              <h3>Missão</h3>
              <p>Oferecer atendimento veterinário de excelência, acessível e humano, a qualquer hora do dia ou da noite.</p>
            </article>
            <article className="card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
              <h3>Visão</h3>
              <p>Ser referência em medicina veterinária na Zona Oeste de São Paulo, unindo tecnologia e empatia.</p>
            </article>
            <article className="card">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z" /></svg></div>
              <h3>Valores</h3>
              <p>Respeito à vida animal, transparência com o tutor, atualização constante e acolhimento genuíno.</p>
            </article>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Nossa equipe</p>
            <h2 className="display-md">Profissionais que <em>amam</em> o que fazem.</h2>
            <p className="lead">Conheça quem cuida do seu pet todos os dias.</p>
          </div>
          <div className="team-grid">
            {team.map((p) => <TeamCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* TOUR VIRTUAL */}
      <section id="tour" className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="kicker primary">Tour virtual</p>
            <h2 className="display-md">Conheça nossa estrutura <em>antes da visita.</em></h2>
            <p className="lead">Transparência reduz a insegurança. Espaços reservados para fotos/360° de cada ambiente.</p>
          </div>
          <div className="tour-grid">
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></div>
              <span className="lbl">Recepção</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3v6a5 5 0 0 0 10 0V3" /><path d="M11 14v2a5 5 0 0 0 10 0v-3" /><circle cx="21" cy="11" r="2" /></svg></div>
              <span className="lbl">Consultórios</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8v8M8 12h8" /></svg></div>
              <span className="lbl">Centro Cirúrgico</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg></div>
              <span className="lbl">Internação</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico ico-fill" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="6" cy="11" r="1.9" /><circle cx="10" cy="6.4" r="1.9" /><circle cx="14" cy="6.4" r="1.9" /><circle cx="18" cy="11" r="1.9" /><path d="M12 21c-2.6 0-4.6-1.6-4.6-3.6 0-1.6 1.4-2.6 2.4-3.6.9-.9 1.4-1.7 2.2-1.7s1.3.8 2.2 1.7c1 1 2.4 2 2.4 3.6 0 2-2 3.6-4.6 3.6Z" /></svg></div>
              <span className="lbl">Ala Felina</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg></div>
              <span className="lbl">Ala Infectocontagiosa</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.8 7 3c-.29 1.8-1.14 3.13-2.29 4.06S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05Z" /><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" /></svg></div>
              <span className="lbl">Banho e Tosa</span>
            </div>
            <div className="tour-item">
              <div className="ic"><svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="1.5" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></svg></div>
              <span className="lbl">Hotel e Creche</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="cta-band">
          <h2 className="display-md">Venha nos conhecer</h2>
          <p>Estamos em Perdizes, prontos para receber você e o seu pet 24 horas por dia.</p>
          <div className="row gap wrap">
            <a href="https://maps.google.com/?q=Av.+Professor+Alfonso+Bovero,+416,+São+Paulo" target="_blank" rel="noopener" className="btn btn-primary">Como chegar <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.1 5.5a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9L8.1 3.44a2 2 0 0 1 1.8 0Z" /><path d="M15 5.7v15" /><path d="M9 3.2v15" /></svg></a>
            <a href="https://wa.me/5511932565663" className="btn btn-outline">Falar conosco</a>
          </div>
        </div>
      </section>
    </>
  );
}

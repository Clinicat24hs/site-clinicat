import type { Metadata } from "next";
import { SurveyEmbed } from "@/components/site/SurveyEmbed";

export const metadata: Metadata = {
  title: "Pesquisa de Satisfação | Clinicat",
  description:
    "Conte como foi sua experiência na Clinicat. Sua opinião nos ajuda a cuidar cada vez melhor do seu pet.",
};

export default function Pesquisa() {
  return (
    <section className="section">
      <div className="container">
        <p className="breadcrumb"><a href="/">Início</a> › <span>Pesquisa</span></p>
        <div className="section-head">
          <p className="kicker primary">Sua opinião importa</p>
          <h1 className="display-md">Pesquisa de <em>satisfação</em>.</h1>
          <p className="lead">Leva só um minutinho e nos ajuda a cuidar cada vez melhor do seu pet.</p>
        </div>
        <SurveyEmbed />
      </div>
    </section>
  );
}

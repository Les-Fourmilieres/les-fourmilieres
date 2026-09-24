import { createFileRoute } from "@tanstack/react-router";
import { Article } from "../Article";
import styled from "styled-components";
import { Link } from "react-aria-components";

export const Route = createFileRoute("/edito-3-pas-de-justice-pas-de-paix")({
  component: RouteComponent,
});

const Poetry = styled.p`
  line-height: 1.75em;
  font-size: 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  a {
    flex: 1 1 40%;
    min-width: 300px;
    cursor: pointer;
    img {
      aspect-ratio: 1.91 / 1;
      width: 100%;
    }
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Édito 3 · Pas de justice, pas de paix</h1>

      <Poetry>
        À la fin de l’été, à la barre sont appelés
        <br />
        quelques animaux interpellés. <br />
        «&nbsp;Pourquoi êtes-vous ici&nbsp;? » demanda la juge. <br />
        « C'est la faute des autres » dit l’accusé,
        <br />
        «&nbsp;C’était pour me défendre&nbsp;» avança le second,
        <br />
        «&nbsp;Je ne reconnais pas cette justice&nbsp;» termina le troisième.{" "}
        <br />
        <br />
        La défense étaya ses arguments, <br />
        mais nul ne pouvait y croire…
        <br />
        Comment défendre la haine de l’autre&nbsp;? <br />
        Comment excuser ces odieux crimes&nbsp;? <br />
        Dans le tribunal, les fourmis s’exclamèrent <br />
        «&nbsp;Pas de Justice, pas de Paix&nbsp;»
        <br />
        Et la juge, annonça, amère, <br />
        qu’elle se prononcerait avant l’hiver. <br />
      </Poetry>

      <p>
        Bienvenue dans ce troisième numéro de l’infolettre des Fourmilières !
        C’est une rentrée politique chargée, notamment avec les procès des
        militants d’extrême droite Le Priol/Bouvier,&nbsp;de Rémi Daillet ou
        encore de trois membres du groupe néonazi Bloc montpellierain. Ces
        procès disent quelque chose que les discours politiques savent parfois
        très bien dissimuler. Derrière les mots « identité », « ordre », «
        sécurité » ou « grand remplacement », il y a des trajectoires bien
        concrètes : des armes, des coups, des réseaux, qui peuvent mener à la
        mort. Faire corps contre le fascisme devient une nécessité, et c’est là
        tout l’objet des Fourmilières.&nbsp;
      </p>
      <p>
        Le festival commence demain ! Il s'articule autour de plus de 220
        évènements dans 7 départements. Alors rendez-vous sur notre page
        programmation pour sortir de l’actualité morbide et agir, ensemble
        contre la prolifération des idées d’extrême droite.&nbsp;
      </p>

      <Links>
        <Link href="/entretien-christine-coord-eau">
          <img
            src="/entretien-coord-eau.webp"
            alt="Entretien avec Christine : La Coord'eau"
            title="Entretien avec Christine : La Coord'eau"
          />
        </Link>
      </Links>
    </Article>
  );
}

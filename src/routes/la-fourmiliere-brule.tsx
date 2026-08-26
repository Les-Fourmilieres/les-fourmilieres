import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import { Article } from "../Article";
import { Link } from "../components/Link/Link";

export const Route = createFileRoute("/la-fourmiliere-brule")({
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
      <h1>La fourmilière brûle et on regarde ailleurs</h1>

      <Poetry>
        La cigale ayant chanté tout l'été
        <br />
        Se rendit chez sa voisine... qui lui offrit une tasse de thé !
        <br />
        <br />
        Que faisiez-vous au temps chaud ?
        <br />
        dit-elle à la visiteuse ?
        <br />
        Nuit et jour à tout venant, je chantais, je festoyais…
        <br />
        ...mais les yeux ouverts je gardais
        <br />
        <br />
        Dans mon appartement brûlant
        <br />
        je voyais des votes indécents,
        <br />
        je sentais les arbres cramer
        <br />
        et le parti à la flamme crânait…
        <br />
        <br />
        Alors à tue tête je chantais
        <br />
        <br />
        «&nbsp;La flamme, la flamme a grandi, a grandi
        <br />
        dans trop d’endroits le feu a pris
        <br />
        faut-il qu’la moitié du pays brûle pour qu'on combatte l'incendie ?
        <br />
        <br />
        La nuit dernière j'ai rêvé <br />
        qu'on était tous devenus pompiers, rassemblés par milliers
        <br />
        et qu'on venait
        <br />
        Pisser sur la flamme, pisser sur la flamme <br />
        on venait pisser sur la flamme&nbsp;»
        <br />
        <i>[Sinsemilia - La flamme- 1998]</i>
        <br />
        <br />
        Vous chantiez ? C'est déjà balèze !<br />
        et bien, ripostez maintenant !<br />
      </Poetry>

      <p>
        <strong>LA FOURMILIÈRE BRÛLE ET ON REGARDE AILLEURS ?</strong>
      </p>

      <p>
        Non !<br />
        Ici on prend le parti de regarder les choses en face pour mieux y faire
        face ! <br />
        Bienvenue dans cette nouvelle infolettre des Fourmilieres, qui vous
        propose d’ouvrir les yeux yeux sur la realite de l’extreme droite dans
        notre region, de nous nourrir des luttes paysannes qui ont fait
        l’Histoire de notre région et de découvrir les collectifs qui
        fourmillent pour créer ce festival antifasciste et solidaire !<br />
        Cigales et fourmis, animaux de tous les pays, unissons-nous pour
        éteindre l’incendie !
      </p>

      <Links>
        <Link href="/entretien-emmanuel-negrier">
          <img
            src="/emmanuel-negrier-entretien.webp"
            alt="Entretien avec Emmanuel Négrier : les « quatre P » du renversement"
            title="Entretien avec Emmanuel Négrier : les « quatre P » du renversement"
          />
        </Link>
        <Link href="/bataille-culturelle-des-luttes-paysannes">
          <img
            src="/bataille-culturelle-des-luttes-paysannes.webp"
            alt="Bataille Culturelle : des luttes paysannes"
            title="Bataille Culturelle : des luttes paysannes"
          />
        </Link>
      </Links>
    </Article>
  );
}

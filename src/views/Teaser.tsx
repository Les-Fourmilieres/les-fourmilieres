import styled from "styled-components";
import { Map } from "../components/Map/Map";
import { Section } from "../components/Section";
import { collectifs } from "../data/collectifs";

const Container = styled.div`
  background-color: var(--surface);
  text-align: center;
  min-height: 50vh;
`;

export function Teaser() {
  return (
    <Container>
      <Section>
        <h1>C'est quoi Les Fourmilières ?</h1>

        <p>
          Les Fourmilières est un{" "}
          <strong>festival solidaire et antifasciste</strong>. Nous sommes des
          collectifs, associations, librairies, brasseries, syndicats, lieux
          culturels, troupes de théâtre, tiers lieux,  cinémas. Nous sommes
					actuellement plus d'une centaine de collectifs répartis de la vallée
					de l'Aveyron jusqu'aux monts d'Ardèche, des  montagnes jusqu'au littoral.
        </p>

        <p>
          L’objectif du festival est d’affirmer la lutte contre l’extrême droite
          dans nos territoires, de montrer que nous sommes nombreux et
          nombreuses à vouloir réagir et de{" "}
          <strong>proposer un autre projet de société</strong> face à la menace
          fasciste.
        </p>

        <p>
          Cette quinzaine antifasciste proposera{" "}
          <strong>
            une programmation d’évènements dans différents lieux de nos
            territoires
          </strong>
          . Chaque collectif organise ses propres évènements, selon l’angle
          (culture, féminisme, luttes locales, écologie, antiracisme...) et le
          format de son choix (sérieux, ludique, festif, artistique, musical,
          théâtral...).
        </p>

        <p>
          Le Festival est donc{" "}
          <strong>décentralisé et fonctionne de façon horizontale</strong>, sans
          association centralisant son organisation.
        </p>
        <Map collectifs={collectifs} />
      </Section>
    </Container>
  );
}

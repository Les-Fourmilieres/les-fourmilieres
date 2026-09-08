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
        <h2>C'est quoi Les Fourmilières ?</h2>

        <p>
          Les Fourmilières est un{" "}
          <strong>festival solidaire et antifasciste</strong>. Nous sommes des
          collectifs, associations, librairies, brasseries, syndicats, lieux
          culturels, troupes de théâtre, tiers lieux, cinémas. Nous sommes
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
      </Section>
			<Section>
				<h2>Pourquoi ce festival ?</h2>
				<p>
					Le festival Les Fourmilières est né de l’envie, du besoin et, désormais,{" "}
					de l'urgence aussi, de se retrouver, de créer du lien avec d’autres, de
					rêver - en toute lucidité - un monde plus solidaire.
				</p>
				<p>
					<strong>
						L’objectif du festival est de clamer la lutte contre l’extrême-droite,{" "}
						notamment en démontrant que de nombreux acteurs proposent, de manière
						argumentée, un autre projet de société face à la menace.
					</strong>
				</p>
				<p>
					Il est antifasciste et solidaire parce qu’il refuse les idées violentes
					et réactionnaires de l’extrême-droite. La menace, réelle autant que
					croissante, fait que nous sommes des millions à constater que le monde
					actuel et, pire encore, l’avenir qui se profile, préfigure une société
					individualiste, discriminante, haineuse, liberticide : la dédiabolisation
					des discours les plus radicaux, les lois iniques, le recul de la démocratie,{" "}
					le monopole des médias aux mains de quelques milliardaires qui promeuvent
					les idées réactionnaires, la manipulation de la pensée et l’inversion des
					concepts, la violence d’état (symbolique et réelle), les génocides, les
					écocides, les injustices…
				</p>
				<p>
					Aujourd’hui, une centaine de collectifs se retrouvent autour d’un objectif
					commun : imaginer, de manière constructive, réfléchie et positive, un monde
					plus juste, plus beau, plus empathique, en tout état de cause, plus
					indispensable que jamais.
				</p>
			</Section>
			<Section>
				<Map collectifs={collectifs} />
			</Section>
    </Container>
  );
}

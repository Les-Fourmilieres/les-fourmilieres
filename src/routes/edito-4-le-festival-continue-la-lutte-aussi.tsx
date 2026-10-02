import { createFileRoute } from "@tanstack/react-router";
import { Article } from "../Article";
import styled from "styled-components";

export const Route = createFileRoute(
  "/edito-4-le-festival-continue-la-lutte-aussi",
)({
  component: RouteComponent,
});

const Poetry = styled.p`
  line-height: 1.75em;
  font-size: 20px;
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Édito 4 · Le festival continue, la lutte aussi</h1>

      <Poetry>
        Qui aurait pu prédire
        <br />
        le ciel qui fait rage et, misère, <br />
        la fermeture de certaines fourmilières ?<br />
        <br />
        Qui aurait pu prédire <br />
        ces milliers de jeunes fourmis en colère <br />
        face aux violences policières ?<br />
        <br />
        Qui aurait pu prédire <br />
        l’antisémitisme de l’adversaire, <br />
        déjà présent dans les documentaires ?<br />
        <br />
        Qui pourrait alors prédire <br />
        que nous, fourmis de toute la Terre,
        <br />
        jamais nous ne nous laisserons faire !
      </Poetry>

      <p>
        Bienvenue dans cette quatrième édition de l’infolettre des Fourmilières
        !
      </p>
      <p>
        Le festival bat son plein depuis une semaine déjà, et l'actualité ne
        fait que renforcer l'envie de lutter. Déjà, le réchauffement climatique
        qui aggrave les épisodes cévenols : en découle une série d'annulations
        d'évènements des Fourmilières. Partout dans les contrées, les jeunes qui
        veulent être écoutés, face à la répression violente et disproportionnée
        de l'État. Puis l'antisémitisme de cet énergumène enfin dévoilé au grand
        jour, sans choquer qui que ce soit, mais démontrant, encore une fois, la
        dangerosité de l'extrême droite. Rassemblons-nous, oui, contre le
        fascisme !
      </p>
    </Article>
  );
}

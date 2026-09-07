import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createFileRoute("/les-fourmilieres")({
  component: RouteComponent,
});

const Container = styled.article`
  max-width: var(--textMaxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
  box-sizing: border-box;
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Container>
      <h1>Pourquoi le nom « Les Fourmilières »</h1>

			<p>
				Parce que les fourmilières regroupent des <strong>structures indépendantes les unes des autres</strong>.
			</p>
			<p>
				Parce que, en dépit du fait que la fourmi « préposée » à la reproduction soit appelée « la reine »,{" "}
				<strong>il n'existe aucune hiérarchie établie au sein de cette communauté</strong>.
			</p>
			<p>
				Parce qu’une fourmilière est donc une <strong>organisation autogérée, horizontale</strong>,{" "}
				où chacune des individualités accomplit sa mission volontairement -{" "}
				à telle enseigne qu'on y trouve aussi des cas d'oisiveté...
			</p>
			<p>
				Parce que les fourmis peuvent être <strong>rouges ou noires, couleurs de l'antifascisme</strong>.
			</p>
			<p>
				Parce que les fourmilières s'articulent autour du travail des « ouvrières »,{" "}
				qui évoquent un <strong>imaginaire féministe, solidaire, laborieux et populaire</strong>.
			</p>
			<p>
				Parce que les collectifs <strong>fourmillent d'idées</strong>, de projets et d'énergie militante.
			</p>
			<p>
				Parce que beaucoup de fourmilières sont <strong>souterraines</strong>, incarnant de la sorte des forces
				invisibles, et pourtant, débordantes d'activité, de courage, d'altruisme...{" "}
				et <strong>présentes partout sur le territoire</strong>.
			</p>
    </Container>
  );
}

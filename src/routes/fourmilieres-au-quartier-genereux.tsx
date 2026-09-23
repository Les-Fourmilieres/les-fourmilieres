import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import {Link} from "../components/Link/Link";
import { searchParams } from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";
import styled from "styled-components";
import cover from "../assets/qg/qg-cover.jpg?url";


export const Route = createFileRoute("/fourmilieres-au-quartier-genereux")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
		margin-bottom: 30px;
`;

const CovertPart = styled.img`
  max-width: 1200px;
  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
			<main>

				<h1>
					Les Fourmilières au Quartier Généreux
				</h1>
				<Covers>
					<CovertPart src={cover} alt={"Image d'illustration."}/>
				</Covers>
				<p>
					15 jours pour fourmiller généreusement contre le fascisme, 15
					jours pour débattre, danser, jouer, cartographier, méditer,
					lire, découvrir une expo ou une pièce de théâtre : c'est ce
					que propose le Quartier Généreux pour cette première quinzaine
					antifasciste et solidaire !
				</p>
				<p>
					Sans oublier <Link to={"/30-septembre-halle-tropisme"}>la journée
					organisée par le Quartier Généreux à la Halle Tropisme</Link> le
					30 septembre, qui se terminera par le concert de Planète Boum Boum
					et le DJ Set d'Habibitch (
					<Link target="_blank" to={"https://www.helloasso.com/associations/le-quartier-genereux/evenements/festival-les-fourmilieres-a-la-halle-tropisme"}>
						prends vite ta place !
					</Link>).
				</p>
				<p>
					Demandez le programme !
				</p>
			</main>

			<Section>
        <Agenda
          path={Route.to}
          disableMap
          disableDateFilder
          disableTypeFilter
        />
      </Section>
    </Section>
  );
}

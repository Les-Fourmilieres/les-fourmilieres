import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import styled from "styled-components";
import { searchParams } from "../components/Agenda/SearchParams";
import cover from "../assets/rsa/rsa.jpg?url";
import { Agenda } from "../components/Agenda/Agenda";
import {Link} from "../components/Link/Link.js";

export const Route = createFileRoute("/journee-radio-saint-affrique")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
`;

const CovertPart = styled.img`
  max-width: 500px;
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
					Journée de soutien à Radio Saint Affrique
				</h1>

				<Covers>
					<CovertPart src={cover} alt={"Affiche Journée de soutien à Radio Saint Affrique."} />
				</Covers>
				<p>
					Parce que lutter contre le fascisme et l'extrême-droite, c'est aussi
					défendre des médias indépendants et les radios associatives, venez
					participer à la journée de soutien à Radio Saint Affrique!
				</p>
				<p>Découvrez Radio Saint Affrique ici: <Link to={"https://www.radiosaintaffrique.com/"} target={"_blank"}>https://www.radiosaintaffrique.com/</Link></p>
				<p>Appelles la radio si tu veux être bénévole : 05 65 49 29 94. Entrée repas offert aux bénévoles.</p>
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

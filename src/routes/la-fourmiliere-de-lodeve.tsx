import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import {RestrictedAgenda} from "../components/Agenda/RestrictedAgenda.js";
import prog_we_2627 from "../assets/lodeve/prog2627.jpg?url";
import styled from "styled-components";

export const Route = createFileRoute("/la-fourmiliere-de-lodeve")({
	component: RouteComponent,
});

const Covers = styled.aside`
  display: flex;
	flex-wrap: wrap;
	row-gap: 24px;
	column-gap:24px;
	justify-content: center;
`;

const CovertPart = styled.img`
	max-width: 500px;
	@media (max-width: 550px) {
	  max-width: 90%;
	}
`

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
	return (
		<Section>
			<h1>Programme de la fourmilière Lodèvois-Larzac</h1>

			<p>La programmation des 15 jours du festival à Lodève est encore en cours. Vous trouverez nos premiers événements ci-dessous.</p>

			<Section>
				<h2>Les 26 et 27 septembre - Weekend d'ouverture au lodeva</h2>
				<Covers>
					Retrouvez-nous au Lodeva les 26 et 27 septembre pour des conférences et concerts pour lancer la fourmilière Lodèvois-Larzac.
					<CovertPart src={prog_we_2627} alt={"Affiche de la programmation du Weekend du 26 et 27 septembre."}/>
				</Covers>
			</Section>
			<Section>
				<RestrictedAgenda path={Route.to} />
			</Section>
		</Section>
	);
}

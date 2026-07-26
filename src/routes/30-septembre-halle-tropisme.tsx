import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import {RestrictedAgenda} from "../components/Agenda/RestrictedAgenda.js";
import styled from "styled-components";

export const Route = createFileRoute("/30-septembre-halle-tropisme")({
	component: RouteComponent,
});

const Numbers = styled.span`
  font-family: system-ui, "Segoe UI", Roboto, sans-serif;
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
	return (
		<Section>
			<h1>Programme du <Numbers>30</Numbers> septembre à la Halle Tropisme</h1>
			<p>Le Quartier Généreux organise avec la Halle tropisme une après-midi et soirée antifa.
				Le DJ set d'Habibitch cloturera cette après midi. Au programme :</p>

				<ul>
					<li><p>Ateliers pour enfants et kermesse antifa l'après midi</p></li>
					<li><p>Tables rondes en fin d'après midi</p></li>
					<li><p>Concerts à partir de 19h (Planète Boum Boum, battucada et dj set d'Habibitch)</p></li>
				</ul>

			<RestrictedAgenda uiids={[
				"ee734fc5-b151-45ab-94a7-6109aaf7cf78",
				"ffea1971-298d-4bda-bdf8-73c567b1069e"
			]} />
		</Section>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import {RestrictedAgenda} from "../components/Agenda/RestrictedAgenda.js";

export const Route = createFileRoute("/la-fourmiliere-de-lodeve")({
	component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
	return (
		<Section>
			<h1>Programme de la fourmilière de Lodève</h1>

			<p>Retrouvez ici prochainement toute la programmation de La Fourmilière de Lodève !</p>

			<RestrictedAgenda path={Route.to} />
		</Section>
	);
}

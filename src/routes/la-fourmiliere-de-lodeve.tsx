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
			<h1>Programme de la fourmilière Lodève-Larzac</h1>

			<p>La programmation des 15 jours du festival à Lodève est encore en cours. Vous trouverez nos premiers événements ci-dessous.</p>

			<RestrictedAgenda path={Route.to} />
		</Section>
	);
}

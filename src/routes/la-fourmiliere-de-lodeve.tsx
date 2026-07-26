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

			<RestrictedAgenda uiids={[
				"1b0bb799-bc15-440f-90cf-c51d0e2fa9be",
				"47fd12d7-b2ca-4be3-a981-fde01ec0422b",
				"bc7705b0-2c3b-49d8-b415-6d182c6ecc69",
				"f8230be7-7806-4b12-8357-0072a12ab3e3",
				"c06f60b1-0b98-4995-9862-389a6aba80e8",
				"ad529e6c-de28-499e-a505-7fa3c5732bb4",
				"ccee2219-c040-47f2-a103-765b7b4809e2",
				"c0045865-03dc-4fb8-8ff1-60fc06a3ed64"
			]} />
		</Section>
	);
}

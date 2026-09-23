import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { ProgramHelper } from "../components/ProgramHelper/ProgramHelper";

export const Route = createFileRoute("/le-programme")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Le Programme</h1>
      <p>
        Les fourmilières, c'est plus d'une centaine de collectifs répartis sur
        plusieurs départements qui organisent{" "}
        <strong>plus de 220 événements</strong> pour Comprendre, Faire du lien
        entre nous, Agir et Faire la fête.
      </p>
      <ProgramHelper />
    </Section>
  );
}

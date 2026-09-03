import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Agenda } from "../components/Agenda/Agenda";
import { searchParams } from "../components/Agenda/SearchParams";

export const Route = createFileRoute("/le-programme")({
  component: RouteComponent,
  validateSearch: searchParams,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Le Programme</h1>
      <p>
        Le programme est en cours de construction. Il sera complété ici au fur
        et à mesure que les événements serons mis en ligne par les collectifs
        organisateurs. Au total, nous prévoyons plus de 200 événements organisés
        par plus de 100 collectifs répartis dans les départements de l'Aude,
        l'Hérault, le Gard, la Lozère, l'Ardèche, les Bouches-du-Rone et
        l'Aveyron.
      </p>
      <Agenda />
    </Section>
  );
}

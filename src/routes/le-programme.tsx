import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Agenda } from "../components/Agenda/Agenda";

export const Route = createFileRoute("/le-programme")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Le Programme</h1>
      <Agenda />
    </Section>
  );
}

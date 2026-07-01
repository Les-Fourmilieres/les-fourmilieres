import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Newsletter } from "../components/Newsletter/Newsletter";

export const Route = createFileRoute("/le-programme")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Le Programme</h1>
      <p>
        Le programme est en cours de construction. Pour être informé·e du
        programme dès qu'il sera publié, vous pouvez vous abonner à la
        newsletter.
      </p>
      <Newsletter />
    </Section>
  );
}

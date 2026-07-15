import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link.js";
import cp26 from "../assets/presse/CP_Les_Fourmilieres26.pdf?url";

export const Route = createFileRoute("/presse")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Espace presse</h1>
      <Section>
        <h2>Communiqués de presse</h2>
        <p>
          Télécharger le{" "}
          <Link href={cp26} download="CP_Les_Fourmilieres_26.pdf">
            communiqué de presse du 15 juillet
          </Link>
          .
        </p>
      </Section>
      <Section>
        <h2>Contact presse</h2>
        <p>
          <Link href="mailto:presse@les-fourmilieres.org">
            presse@les-fourmilieres.org
          </Link>
        </p>
      </Section>
    </Section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link.js";
import dp from "../assets/presse/DP_Fourmilières.pdf?url";
import styled from "styled-components";

const CpLink = styled.a`
  &,
  &:visited {
    color: var(--accent);
  }
`;

export const Route = createFileRoute("/presse")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Espace presse</h1>
      <Section>
				<h2>Dossier de presse</h2>
					<p>
						Télécharger le{" "}
						<CpLink href={dp} target="_blank">
							dossier de presse
						</CpLink>
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

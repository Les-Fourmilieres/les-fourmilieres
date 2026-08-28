import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import cp26 from "../assets/presse/CP_Les_Fourmilieres26.pdf?url";
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
        <h2>Communiqués de presse</h2>
        <p>
          Télécharger le{" "}
          <CpLink href={cp26} target="_blank">
            communiqué de presse du 15 juillet
          </CpLink>
          .
        </p>
      </Section>
    </Section>
  );
}

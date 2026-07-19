import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link.js";
import cp26 from "../assets/presse/CP_Les_Fourmilieres26.pdf?url";
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
      <style>
        {`
          a.cp {
            color:var(--accent);
          }
          a.cp:visited{
          	color:var(--accent);
          }
        `}
      </style>
      <h1>Espace presse</h1>
      <Section>
        <h2>Communiqués de presse</h2>
        <p>
          Télécharger le{" "}
          <CpLink href={cp26} target="_blank">
            communiqué de presse du 15 juillet
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

import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link.tsx";
import dp from "../assets/presse/DP_Fourmilières.pdf?url";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  ${Section} {
    flex: 1 1 45%;
    min-width: 300px;
  }
`;

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
      <Row>
        <Section>
          <h2>Dossier de presse</h2>
          <p>
            Télécharger le{" "}
            <CpLink href={dp} target="_blank">
              dossier de presse
            </CpLink>
            .
          </p>
          <p style={{ textAlign: "center" }}>
            Pour obtenir le mot de passe vous permettant de télécharger les
            photos de presse, merci d'envoyer un email à{" "}
            <Link href="mailto:presse@les-fourmilieres.org">
              presse@les-fourmilieres.org
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
      </Row>
      <h2>Extraits de presse</h2>
      <h3>18 septembre 2026 · La Marseillaise</h3>
      <CpLink href="/presse/260918_LaMarseillaise.pdf" target="_blank">
        Un festival fait fourmiller les initiatives contre l'extrême droite
      </CpLink>
      <h3>16 septembre 2026 · Renverser la table</h3>
      <CpLink href="/presse/260916_RenverserLaTable.pdf" target="_blank">
        Newsletter · Renverser la table par Victoire Tuaillon
      </CpLink>
      <h3>11 septembre 2026 · Libération</h3>
      <CpLink href="/presse/260911_Liberation.pdf" target="_blank">
        Festival « Les Fourmilières » creuse le sillon explicite d'un festival antifasciste et solidaire
      </CpLink>
      <h3>11 septembre 2026 · Médiapart</h3>
      <CpLink href="/presse/260911_Mediapart_InExtremis.pdf" target="_blank">
        In Extremis : la newsletter sur les extrêmes droites
      </CpLink>
      
      <h3>04 septembre 2026 · Midi Libre Lodève</h3>
      <CpLink href="/presse/260904_Midi_Libre_Lodeve.jpg" target="_blank">
        Les Fourmilières ont travaillé tout l'été pour préparer le festival
      </CpLink>
      <h3>04 juillet 2026 · Midi Libre Lodève</h3>
      <CpLink href="/presse/260704_MidiLibreLodeve.pdf" target="_blank">
        Le Parti Communiste interpelle le maire sur sa neutralité
      </CpLink>
      <h3>04 juillet 2026 · Midi Libre Lodève</h3>
      <CpLink href="/presse/260704_MidiLibreLodeve_3.pdf" target="_blank">
        Le festival antifasciste et antiraciste Les Foumilières n'est pas le
        bienvenu à Lodève
      </CpLink>
    </Section>
  );
}

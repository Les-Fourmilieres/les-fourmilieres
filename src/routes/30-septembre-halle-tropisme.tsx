import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { RestrictedAgenda } from "../components/Agenda/RestrictedAgenda.js";
import styled from "styled-components";
import { LinkButton } from "../components/Link/Link.js";
import { searchParams } from "../components/Agenda/SearchParams.js";

export const Route = createFileRoute("/30-septembre-halle-tropisme")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const ButtonStyle = `
  border: none;
  background: var(--accent);
  color: var(--accent-contrast);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  white-space: nowrap;
  &:hover {
    background-color: var(--accent-dark);
  }`;

const StyledLinkButton = styled(LinkButton)`
  ${ButtonStyle}
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>
        Les Fourmilières à la Halle Tropisme - Planète Boum Boum et Habibitch le
        30 septembre
      </h1>
      <p>
        Le Quartier Généreux et la Halle Tropisme invitent Planète Boum Boum et
        Habibitch pour une soirée antifasciste et solidaire ✊ Le 30 septembre,
        viens participer au festival Les Fourmilières à la Halle Tropisme pour
        une soirée pleine de surprises !
      </p>

      <Section>
        <p>Au programme :</p>
        <p>
          <u>
            <strong>Après-midi (entrée libre) :</strong>
          </u>
        </p>
        <p>
          🌱 <strong>15h - 18h | PAS SI GRAND.ES, DÉJÀ MILITANT.ES</strong>{" "}
          (après-midi pour petits et grands)
        </p>
        <p>
          Des ateliers pour les enfants et adolescents seront proposés par
          différents collectifs :<br />- ateliers sur les droits des enfants,{" "}
          <em>avec le collectif enfantiste 34</em>
          <br />- lecture d'album jeunesse engagé,{" "}
          <em>avec la librairie La Cavale</em>
        </p>
        <p>
          - Kermesse antifasciste, <em>par le Quartier Généreux</em>
        </p>
        <p>
          <em>- </em>Fiscal Fitness<em>, avec Attac</em>
        </p>
        <p></p>
        <p>
          📚 <strong>16h30 - 19h30 | "DÉCOLONISER LE DANCEFLOOR"</strong>
        </p>
        <p>
          <em>- </em>arpentage du livre, d'Habibitch,{" "}
          <em>par le Quartier Généreux</em>
        </p>
        <p>- rencontre avec l'autrice (18h à 19h30)</p>
        <p></p>
        <p>
          <u>
            <strong>Soirée (entrée avec billets obligatoire)</strong>
          </u>
        </p>
        <p>
          🎶 <strong>20h00 - 23h30 | CONCERTS</strong>
        </p>
        <p>- 20h : concert de Planète Boum Boum</p>
        <p>- 21h 30 : Performance de Habibitch</p>
        <p>Et plein de surprises tout au long de la soirée !</p>
        <StyledLinkButton
          href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/festival-les-fourmilieres-a-la-halle-tropisme"
          target="_blank"
        >
          Réserve vite ta place !
        </StyledLinkButton>
      </Section>
      <Section>
        <RestrictedAgenda path={Route.to} />
      </Section>
    </Section>
  );
}

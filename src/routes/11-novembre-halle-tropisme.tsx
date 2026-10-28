import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import styled from "styled-components";
import { LinkButton } from "../components/Link/Link";
import { searchParams } from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";

export const Route = createFileRoute("/11-novembre-halle-tropisme")({
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

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
`;

const CovertPart = styled.img`
  max-width: 500px;
  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <main>
        <h1>
          Les Fourmilières à la Halle Tropisme - Planète Boum Boum et Habibitch
          le 11 novembre
        </h1>
        <p>
          Le Quartier Généreux et la Halle Tropisme invitent Planète Boum Boum
          et Habibitch pour une soirée antifasciste et solidaire ✊ Le 11
          novembre, viens participer au festival Les Fourmilières à la Halle
          Tropisme pour une soirée pleine de surprises !
        </p>
        <Covers>
          <CovertPart
            src={"/events/halle-tropisme-fourmilieres-11-novembre.webp"}
            alt={"Affiche de la Faites des Solidarités."}
          />
        </Covers>
        <p>Au programme :</p>
        <p>
          <u>
            <strong>Après-midi (entrée libre) :</strong>
          </u>
        </p>
        <p>
          <strong>✊ 13h12 | Ouverture</strong>
        </p>
        <p>
          <strong>
            🌱 13h30 - 16h30 | PAS SI GRAND·ES, DÉJÀ MILITANT·ES (après-midi
            pour petit-es et grand-es)
          </strong>
        </p>
        <p>Kermesse antifa et ateliers pour les enfants :</p>
        <ul>
          <li>
            Kermesse antifa, par{" "}
            <i>les Travailleur·euses de l’art 34 et le Quartier Généreux</i>
          </li>
          <li>
            Stand maquillage, avec <i>L’anomalie</i>
          </li>
          <li>
            Toi aussi t’as des droits, ateliers pour enfants, avec{" "}
            <i>Le Récif</i>
          </li>
          <li>
            Lecture d'albums engagés, avec <i>La Cavale</i>
          </li>
          <li>
            Stand de sensibilisation sur l’adultisme, avec{" "}
            <i>la librairie La Cavale et le Quartier Généreux</i>
          </li>
          <li>
            Vente d’affiches, badges, tee shirts, par{" "}
            <i>les Travailleurs·euses de l’art 34</i>
          </li>
        </ul>
        📚 16h30 - 19h30 | LE QG DES LUTTES
        <p>
          📚 <strong>16h30 - 19h30 | LE QG DES LUTTES</strong>
        </p>
        <p>
          <strong>"DÉCOLONISER LE DANCEFLOOR"</strong>
        </p>
        <ul>
          <li>
            16h30 : arpentage du livre d'Habibitch, par{" "}
            <i>le Quartier Généreux</i>
          </li>
          <li>
            18h : rencontre avec Habibitch et dédicace, par{" "}
            <i>le Quartier Généreux</i>
          </li>
          <li>
            19h : vente du livre, par la librairie <i>La Cavale</i>
          </li>
        </ul>
        <p>
          <strong>ATELIERS ET STANDS MILITANTS</strong>
        </p>
        <ul>
          <li>
            Stand sérigraphie : viens pimper ton vieux tee shirt aux couleurs de
            l'antifascisme.
          </li>
          <li>
            Fiscal fitness, avec <i>Attac et les Clown·e·s artivistes</i>
          </li>
          <li>
            Stand de sensibilisation sur l’adultisme, avec la librairie{" "}
            <i>La Cavale et le Quartier Généreux</i>
          </li>
          <li>
            Stand de générateur de refus de subvention pour cause de gauchisme
            idéologique, par <i>Asso Solidaires 34</i>
          </li>
          <li>
            Stand À vote service, par <i>le Quartier Généreux</i>
          </li>
          <li>
            Vente d’affiches, badges, tee shirts par{" "}
            <i>les Travailleurs·euses de l’art 34</i>
          </li>
        </ul>
        <p>
          <u>
            <strong>Soirée (entrée avec billets obligatoire)</strong>
          </u>
        </p>
        <p>
          🎶 <strong>19h30 - 23h30 | CONCERTS</strong>
        </p>
        <ul>
          <li>
            19h30 : Chorale <strong>Le Cri du Choeur</strong>
          </li>
          <li>
            20h00 : concert de <strong>Planète Boum Boum</strong>
          </li>
          <li>
            21h00 : blind test et piñACAB avec la compagnie{" "}
            <strong>Passer par les hauteurs</strong>
          </li>
          <li>
            21h30 : <strong>Djset d'Habibitch</strong>
          </li>
        </ul>
        <p>Et plein de surprises tout au long de la soirée !</p>
        <Section>
          <StyledLinkButton
            href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/festival-les-fourmilieres-a-la-halle-tropisme"
            target="_blank"
          >
            Réserve vite ta place !
          </StyledLinkButton>
        </Section>
      </main>
      <Section>
        <Agenda
          path={Route.path}
          disableMap
          disableDateFilder
          disableTypeFilter
        />
      </Section>
    </Section>
  );
}

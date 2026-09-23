import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { ProgramHelper } from "../components/ProgramHelper/ProgramHelper";
import { EventDate } from "../components/Agenda/EventDate";
import styled from "styled-components";
import { Link } from "../components/Link/Link";
import type { MobilizonEventI } from "../components/Agenda/Event";

const SecondaryTitle = styled.h2`
  margin-top: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
  flex-wrap: wrap;
`;

const EventTile = styled(Link)`
  flex: 1 1 45%;
  min-width: 300px;
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--text);
  cursor: pointer;
  &:visited {
    color: var(--text);
  }
  text-decoration: none;
`;

const Infos = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 4px;
`;
const Title = styled.h3`
  margin: 0;
`;
const SubTitle = styled.h4`
  margin: 0;
`;

export const Route = createFileRoute("/le-programme")({
  component: RouteComponent,
});

const eventPreview: (Pick<MobilizonEventI, "beginsOn" | "endsOn" | "title"> & {
  url: string;
  subTitle: string;
})[] = [
  {
    url: "/nuits-occupe-es",
    title: "Les Nuits Occupé·es",
    subTitle:
      "Transforme Nîmes en un espace d’expression et de réappropriation pour et par les personnes sexisées",
    beginsOn: new Date(2026, 8, 23, 12, 30, 0),
    endsOn: new Date(2026, 8, 26, 16, 0, 0),
  },
  {
    url: "/fourmilieres-au-quartier-genereux",
    title: "Les Fourmilières au Quartier Généreux",
    subTitle: "15 jours pour fourmiller généreusement contre le fascisme",
    beginsOn: new Date(2026, 8, 25, 12, 30, 0),
    endsOn: new Date(2026, 9, 11, 16, 0, 0),
  },
  {
    url: "/festival-des-luttes-populaires",
    title: "Festival des luttes populaires",
    subTitle: "Notre énergie collective face à leurs énergies polluantes !",
    beginsOn: new Date(2026, 8, 26, 12, 30, 0),
    endsOn: new Date(2026, 8, 27, 16, 0, 0),
  },
  {
    url: "/faites-des-solidarites",
    title: "Faites des solidarités au Vigan",
    subTitle: "Venez construire autour des solidarités et des résistances",
    beginsOn: new Date(2026, 8, 29, 12, 30, 0),
    endsOn: new Date(2026, 8, 30, 18, 0, 0),
  },
  {
    url: "/30-septembre-halle-tropisme",
    title: "Les Fourmilières à la Halle Tropisme",
    subTitle: "Planète Boum Boum et Habibitch le 30 septembre",
    beginsOn: new Date(2026, 8, 30, 15, 0, 0),
    endsOn: new Date(2026, 8, 30, 23, 30, 0),
  },
  {
    url: "/groove-your-ass",
    title: "Groove Your Ass",
    subTitle: "Un festival anticapitaliste, écologiste et culturel",
    beginsOn: new Date(2026, 9, 2, 16, 0, 0),
    endsOn: new Date(2026, 9, 4, 22, 0, 0),
  },
  {
    url: "mi-merveilleuses-mi-meres-veneres",
    title: "Mi-Merveilleuses, Mi Mères Vénères",
    subTitle: "Festival féministe des parentalités",
    beginsOn: new Date(2026, 9, 3, 12, 0, 0),
    endsOn: new Date(2026, 9, 3, 23, 30, 0),
  },
  {
    url: "/mobilisation-contre-cra-beziers",
    title: "Mobilisation contre le CRA de Béziers",
    subTitle: "Luttons pour la libre circulation des toutes les personnes",
    beginsOn: new Date(2026, 9, 3, 12, 0, 0),
    endsOn: new Date(2026, 9, 4, 23, 30, 0),
  },
  {
    url: "/fourmilieres-a-ganges",
    title: "La Fourmilière de Ganges",
    subTitle:
      "Expos, lectures, rencontres, concerts, spectacles, parade, banquet populaire",
    beginsOn: new Date(2026, 9, 6, 12, 0, 0),
    endsOn: new Date(2026, 9, 11, 23, 30, 0),
  },
  {
    url: "/pise-en-fete",
    title: "La Pise en Fête",
    subTitle: "Le quartier de la Pise est en Fête · La Grand-Combe",
    beginsOn: new Date(2026, 9, 9, 12, 0, 0),
    endsOn: new Date(2026, 9, 10, 23, 30, 0),
  },
];

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Le Programme</h1>
      <p>
        Les fourmilières, c'est plus d'une centaine de collectifs répartis sur
        plusieurs départements qui organisent{" "}
        <strong>plus de 220 événements</strong> pour Comprendre, Faire du lien
        entre nous, Agir et Faire la fête.
      </p>
      <ProgramHelper />

      <SecondaryTitle>Quelques temps forts du festival</SecondaryTitle>
      <Container>
        {eventPreview.map((event) => (
          <EventTile href={event.url}>
            <EventDate event={event} />
            <Infos>
              <Title>{event.title}</Title>
              <SubTitle>{event.subTitle}</SubTitle>
            </Infos>
          </EventTile>
        ))}
      </Container>
    </Section>
  );
}

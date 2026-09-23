import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { ProgramHelper } from "../components/ProgramHelper/ProgramHelper";
import { EventDate } from "../components/Agenda/EventDate";
import styled from "styled-components";
import { Link } from "../components/Link/Link";
import type { MobilizonEventI } from "../components/Agenda/Event";
import { EventAddress } from "../components/Agenda/EventAddress";

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

const eventPreview: (Pick<
  MobilizonEventI,
  "beginsOn" | "endsOn" | "title" | "physicalAddress"
> & {
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
    physicalAddress: {
      description: "Nîmes",
      geom: "4.3601997;43.840846",
    },
  },
  {
    url: "/la-fourmiliere-de-lodeve",
    title: "La Fourmilière Lodèvois-Larzac",
    subTitle:
      "Une fourmilière en effervescence pour 15 jours de festival à Lodève",
    beginsOn: new Date(2026, 8, 26, 11, 0, 0),
    endsOn: new Date(2026, 9, 10, 0, 0, 0),
    physicalAddress: {
      description: "Lodève",
      geom: "3.31892;43.73106",
    },
  },
  {
    url: "/fourmilieres-au-quartier-genereux",
    title: "Les Fourmilières au Quartier Généreux · Montpellier",
    subTitle: "15 jours pour fourmiller généreusement contre le fascisme",
    beginsOn: new Date(2026, 8, 25, 11, 0, 0),
    endsOn: new Date(2026, 9, 11, 16, 0, 0),
    physicalAddress: {
      description: "Le Quartier Généreux · Montpellier",
      geom: "43.6159316;3.8748747",
    },
  },
  {
    url: "/festival-des-luttes-populaires",
    title: "Festival des luttes populaires",
    subTitle: "Notre énergie collective face à leurs énergies polluantes !",
    beginsOn: new Date(2026, 8, 26, 12, 30, 0),
    endsOn: new Date(2026, 8, 27, 16, 0, 0),
    physicalAddress: {
      description: "Olivette et Jardin de Langel · Armissan",
      locality: "Narbonne",
      geom: "43.1859503;3.0648003",
    },
  },
  {
    url: "/faites-des-solidarites",
    title: "Faites des solidarités au Vigan",
    subTitle: "Venez construire autour des solidarités et des résistances",
    beginsOn: new Date(2026, 8, 29, 12, 30, 0),
    endsOn: new Date(2026, 8, 30, 18, 0, 0),
    physicalAddress: {
      description: "Foyer Albouy · Le Vigan",
      geom: "43.9903403039744;3.6150398202932483",
    },
  },
  {
    url: "/30-septembre-halle-tropisme",
    title: "Les Fourmilières à la Halle Tropisme",
    subTitle:
      "Une après-midi militante pour petit.es et grand.es suivi d'un concert de Planète Boum Boum et Habibitch",
    beginsOn: new Date(2026, 8, 30, 15, 0, 0),
    endsOn: new Date(2026, 8, 30, 23, 30, 0),
    physicalAddress: {
      description: "La Halle Tropisme · Montpellier",
      geom: "43.60222918891905;3.858688767336156",
    },
  },
  {
    url: "/groove-your-ass",
    title: "Groove Your Ass",
    subTitle: "Un festival anticapitaliste, écologiste et culturel",
    beginsOn: new Date(2026, 9, 2, 16, 0, 0),
    endsOn: new Date(2026, 9, 4, 22, 0, 0),
    physicalAddress: {
      description: "Parc Montcalm · Montpellier",
      geom: "43.5970745;3.859078",
    },
  },
  {
    url: "mi-merveilleuses-mi-meres-veneres",
    title: "Mi-Merveilleuses, Mi Mères Vénères",
    subTitle: "Festival féministe des parentalités",
    beginsOn: new Date(2026, 9, 3, 12, 0, 0),
    endsOn: new Date(2026, 9, 3, 23, 30, 0),
    physicalAddress: {
      description: "Le Carrousel · Montpellier",
      geom: "43.60525957053501;3.873706056422263",
    },
  },
  {
    url: "/mobilisation-contre-cra-beziers",
    title: "Mobilisation contre le CRA de Béziers",
    subTitle: "Luttons pour la libre circulation des toutes les personnes",
    beginsOn: new Date(2026, 9, 3, 12, 0, 0),
    endsOn: new Date(2026, 9, 4, 23, 30, 0),
    physicalAddress: {
      description: "Montpellier",
      geom: "43.5859072;3.8529982",
    },
  },
  {
    url: "/fourmilieres-a-ganges",
    title: "La Fourmilière de Ganges",
    subTitle:
      "Expos, lectures, rencontres, concerts, spectacles, parade, banquet populaire",
    beginsOn: new Date(2026, 9, 6, 12, 0, 0),
    endsOn: new Date(2026, 9, 11, 23, 30, 0),
    physicalAddress: {
      description: "Ganges",
      geom: "43.934114272413765;3.7077889465294476",
    },
  },
  {
    url: "/pise-en-fete",
    title: "La Pise en Fête",
    subTitle: "Le quartier de la Pise est en Fête · La Grand-Combe",
    beginsOn: new Date(2026, 9, 9, 12, 0, 0),
    endsOn: new Date(2026, 9, 10, 23, 30, 0),
    physicalAddress: {
      description: "La Grand-Combe",
      geom: "44.2112876;4.0334133",
    },
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
        <strong>plus de 230 événements</strong> pour Comprendre, Faire du lien
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
              {event.physicalAddress && <EventAddress event={event} />}
            </Infos>
          </EventTile>
        ))}
      </Container>
    </Section>
  );
}

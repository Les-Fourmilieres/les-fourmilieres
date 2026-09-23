import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import styled from "styled-components";
import { searchParams } from "../components/Agenda/SearchParams";
import cover from "../assets/no/affiche.jpg?url";
import recto from "../assets/no/prog-1.png?url";
import verso from "../assets/no/prog-2.png?url";
import { Agenda } from "../components/Agenda/Agenda";

export const Route = createFileRoute("/nuits-occupe-es")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
		margin-bottom: 30px;
`;

const CovertPart = styled.img`
  max-width: 1200px;
  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

const CovertHalfPart = styled.img`
  max-width: 550px;
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
				Les Nuits Occupé.es
			</h1>
			<Covers>
				<CovertPart src={cover} alt={"Affiche. Nuits Occupé·es"} />
			</Covers>
			<p>Depuis 2022, Nuits Occupé·es transforme Nîmes en un espace d’expression et de réappropriation pour et par les personnes sexisées*. Plus qu’un festival, c’est un acte de résistance artistique et citoyen, qui questionne la place de chacun.e dans la ville et lutte contre les discriminations de genre. Chaque année, une programmation engagée mêle spectacles, performances ainsi que des ateliers de médiation auprès des populations nimoises. Toute la programmation à découvrir sur notre site :
				<a target="_blank" rel="noopener noreferrer ugc" href="https://labassecour.com/evenements/">https://labassecour.com/evenements/</a></p>

			<h2>Le programme en image</h2>
			<Covers>
				<CovertHalfPart src={recto} alt={"Flyer recto. Nuits Occupé.es"} />
				<CovertHalfPart src={verso} alt={"Flyer verso. Nuits Occupé.es"} />
			</Covers>

			<Section>
				<h2>Le programme en détails</h2>
			<Agenda
				path={Route.to}
				disableMap
				disableDateFilder
				disableTypeFilter
			/>
		</Section>
	</main>
		</Section>
	);}

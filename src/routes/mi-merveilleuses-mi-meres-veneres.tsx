import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import cover from "../assets/mmmmv/cover.jpg?url";
import styled from "styled-components";
import {
  searchParams,
  type SearchParams,
} from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";
import { useCallback } from "react";

export const Route = createFileRoute("/mi-merveilleuses-mi-meres-veneres")({
  component: RouteComponent,
  validateSearch: searchParams,
});

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
  const searchParams = Route.useSearch();
  const navigate = Route.useNavigate();
  const setSearchParams = useCallback(
    (params: SearchParams) => {
      navigate({
        search: params,
      });
    },
    [navigate],
  );
  return (
    <Section>
			<main>
      <h1>Mi-Merveilleuses, Mi Mères Vénères</h1>
				<Covers>
					<CovertPart src={cover} alt={"Affiche, Mi Merveilleuses, Mi Mères Vénères"}/>
				</Covers>
     <p>
			 Nous sommes un collectif informel et bénévole de parents.
			 Entre nous, nous animons depuis 3 ans des groupes de parole
			 entre femmes.
		 </p>

			<p>
			 Nous sommes heureuses.x de pouvoir organiser cette deuxième
				édition du festival Mi merveilleuses, Mi mères vénères.
				Nous proposons une dizaine d’atelier de 2h animer en
				intelligence collective pour échanger sur des thématiques
				actuelles.
			</p>
			<h2>Le programme de la journée</h2>
			<p><strong>10h - 12h</strong></p>
			<ul>
				<li>Éduquer des garçons (complet)</li>
				<li>La ménopause et andropause</li>
				<li>Parents malades</li>
				<li>Parents queer</li>
			</ul>
				<p><strong>14h - 16h</strong></p>
				<ul>
					<li>Éduquer des garçons (complet)</li>
					<li>Parents d’ados</li>
					<li>Parents militants</li>
					<li>Se repérer dans l'espace</li>
					<li>Faire famille autrement (complet)</li>
				</ul>
				<p>Si vous avez des questions n’hésitez pas à nous joindre : parentsfeministes@mailo.com !</p>
			</main>
      <Section>
        <Agenda
          path={Route.to}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          disableMap
					disableTypeFilter
					disableDateFilder
        />
      </Section>
    </Section>
  );
}

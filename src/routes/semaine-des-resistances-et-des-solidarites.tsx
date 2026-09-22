import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import flyer from "../assets/srs/srs-flyer.jpeg?url";
import styled from "styled-components";
import {
  searchParams,
  type SearchParams,
} from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";
import { useCallback } from "react";

export const Route = createFileRoute("/semaine-des-resistances-et-des-solidarites")({
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
      <h1>Semaine des Résistances et des Solidarités</h1>
			<h2>d'hier, d'aujourd'hui et de demain</h2>
     <p>Du 6 au 10 octobre, ce programme est inscrit dans les fourmilières par Le Bouillon Cube, Mélando et la librairie la BestiOle.</p>
			<Covers>
				<CovertPart src={flyer} alt={"Flyer de la semaine des Résistances et des Solidarités"}/>
			</Covers>
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

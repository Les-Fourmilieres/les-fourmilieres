import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import flyer from "../assets/ganges/ganges.jpg?url";
import styled from "styled-components";
import {
  searchParams,
  type SearchParams,
} from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";
import { useCallback } from "react";

export const Route = createFileRoute("/fourmilieres-a-ganges")({
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
      <h1>Les Fourmilières à Ganges</h1>
     <p>Du 6 au 11 octobre, les Fourmilières investissent Ganges !</p>
			<Covers>
				<CovertPart src={flyer} alt={"Affiche, Les Fourmilières à Ganges"}/>
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

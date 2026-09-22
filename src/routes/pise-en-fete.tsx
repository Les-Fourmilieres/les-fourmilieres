import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import flyer from "../assets/pef/pef.jpg?url";
import styled from "styled-components";
import {
  searchParams,
  type SearchParams,
} from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";
import { useCallback } from "react";

export const Route = createFileRoute("/pise-en-fete")({
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
      <h1>La Pise en Fête</h1>
     <p>Le 9 et 19 octobre, le quarter de la pise est en fête, portée par La Combine et la La Frénétik.</p>
			<Covers>
				<CovertPart src={flyer} alt={"Flyer de la Pise en fête"}/>
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

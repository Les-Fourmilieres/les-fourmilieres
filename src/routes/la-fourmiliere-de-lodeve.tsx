import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import {
  searchParams,
  type SearchParams,
} from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";
import { useCallback } from "react";

export const Route = createFileRoute("/la-fourmiliere-de-lodeve")({
  component: RouteComponent,
  validateSearch: searchParams,
});

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
      <h1>Programme de la fourmilière Lodèvois-Larzac</h1>
      <Section>
        <Agenda
          path={Route.to}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          disableMap
          hidePassedEvents
        />
      </Section>
    </Section>
  );
}

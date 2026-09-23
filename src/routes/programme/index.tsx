import { createFileRoute } from "@tanstack/react-router";
import { Agenda } from "../../components/Agenda/Agenda";
import { useCallback } from "react";
import { Section } from "../../components/Section";
import {
  searchParams,
  type SearchParams,
} from "../../components/Agenda/SearchParams";

export const Route = createFileRoute("/programme/")({
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
      <h1>Le Programme</h1>
      <p>
        Les fourmilières, c'est plus d'une centaine de collectifs répartis sur
        plusieurs départements qui organisent{" "}
        <strong>plus de 200 événements</strong> pour Comprendre, Faire du lien
        entre nous, Agir et Faire la fête.
      </p>
      <Agenda
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        enableCat={true}
      />
    </Section>
  );
}

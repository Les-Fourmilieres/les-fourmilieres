import { createFileRoute, Navigate } from "@tanstack/react-router";
import { searchParams } from "../components/Agenda/SearchParams";

export const Route = createFileRoute("/30-septembre-halle-tropisme")({
  component: RouteComponent,
  validateSearch: searchParams,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return <Navigate to="/11-novembre-halle-tropisme" />;
}

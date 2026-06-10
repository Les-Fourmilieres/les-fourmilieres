import { createFileRoute } from "@tanstack/react-router";
import { Agenda } from "../../components/Agenda/Agenda";

export const Route = createFileRoute("/programme/")({
  component: Agenda,
});

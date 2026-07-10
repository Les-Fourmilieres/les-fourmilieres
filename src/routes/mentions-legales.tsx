import { createFileRoute } from "@tanstack/react-router";
import { LegalNotice } from "../components/LegalNotice";

export const Route = createFileRoute("/mentions-legales")({
  component: LegalNotice,
});

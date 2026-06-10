import { createFileRoute } from "@tanstack/react-router";
import { fetchEventByUuid } from "../../components/Agenda/api";
import { useQuery } from "@tanstack/react-query";
import { EventPage } from "../../components/Agenda/EventPage";

export const Route = createFileRoute("/programme/$uuid")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const { uuid } = Route.useParams();

  const { data } = useQuery({
    queryKey: ["calendar-event", uuid],
    queryFn: () => fetchEventByUuid(uuid),
  });
  if (!data) return null;
  return <EventPage event={data.data.event} />;
}

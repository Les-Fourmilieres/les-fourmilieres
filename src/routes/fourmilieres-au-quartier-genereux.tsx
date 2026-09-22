import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import {Link} from "../components/Link/Link";
import { searchParams } from "../components/Agenda/SearchParams";
import { Agenda } from "../components/Agenda/Agenda";

export const Route = createFileRoute("/fourmilieres-au-quartier-genereux")({
  component: RouteComponent,
  validateSearch: searchParams,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
			<main>

				<h1>
					Les Fourmilières au Quartier Généreux
				</h1>
				<p>
					Pendant 15 jours, le Quartier Généreux est sur le pont pour le festival les Fourmilières ! Sans oublier <Link to={"/30-septembre-halle-tropisme"}>la journée du
					30 septembre à la Halle Tropisme</Link> qui se terminera par le concert de Planète Boum Boum et le DJ Set d'Habibitch (<Link target="_blank" to={"https://www.helloasso.com/associations/le-quartier-genereux/evenements/festival-les-fourmilieres-a-la-halle-tropisme"}>prends vite ta place !</Link>).
				</p>
				<p>Retrouve toute la programmation du QG ici</p>
			</main>

			<Section>
        <Agenda
          path={Route.to}
          disableMap
          disableDateFilder
          disableTypeFilter
        />
      </Section>
    </Section>
  );
}

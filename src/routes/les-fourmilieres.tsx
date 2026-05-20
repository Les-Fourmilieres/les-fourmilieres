import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createFileRoute("/les-fourmilieres")({
  component: RouteComponent,
});

const Container = styled.article`
  max-width: var(--textMaxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Container>
      <h1>Pourquoi le nom « Les Fourmilières »</h1>

      <p>
        Nous sommes des fourmilières car nous sommes{" "}
        <strong>une multitude de structures collectives indépendantes</strong>{" "}
        les unes des autres.
      </p>
      <p>
        Contrairement à l'idée reçue du fait que la fourmi spécialisée dans la
        reproduction soit appelée « la reine », il n'y pas de hiérarchie au sein
        d'une fourmilière. Une fourmilière est{" "}
        <strong>une organisation autogérée horizontale</strong> où chaque fourmi
        fait sa part de manière volontaire. Il y a d'ailleurs une part
        significative de fourmis oisives au sein de chaque fourmilière.
      </p>
      <p>
        Les fourmis peuvent être <strong>rouges ou noires</strong>&nbsp;:
        couleurs de l'antifascisme.
      </p>
      <p>
        Les fourmilières reposes sur le travail des « ouvrières » qui évoquent
        un <strong>imaginaire féministe et ouvrier</strong>.
      </p>
      <p>
        Parce que nos collectifs{" "}
        <strong>fourmillent d'idées, de projets et d'énergie militante</strong>.
      </p>
      <p>
        Beaucoup de fourmilières sont <strong>souterraines</strong>&nbsp;: nous
        sommes des forces invisibles partout sur le territoire.
      </p>
    </Container>
  );
}

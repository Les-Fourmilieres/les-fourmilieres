import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Link } from "../components/Link/Link";
import { AntSeparator } from "../components/AntSeparator";

export const Route = createFileRoute("/politique-de-confidentialite")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Politique de confidentialité</h1>

      <h2>Engagement de confidentialité</h2>
      <p>
        Le site <strong>les-fourmilieres.org</strong> s'engage à respecter la
        vie privée de ses utilisateurs. Notre démarche est fondée sur la
        transparence et la minimisation des données.
      </p>

      <h2>Collecte de données personnelles</h2>
      <p>
        En France, les données personnelles sont notamment protégées par{" "}
        <Link href="https://legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460">
          la loi n°&nbsp;78-17 du 6&nbsp;janvier 1978
        </Link>
        , la loi n°&nbsp;2004-801 du 6&nbsp;août 2004, l’article L.&nbsp;226-13
        du Code pénal et la Directive Européenne du 24 &nbsp;octobre 1995.
      </p>
      <p>
        En tout état de cause <strong>Les Fourmilières</strong> ne collectent
        des informations personnelles relatives à l’utilisateur·trice (adresse
        électronique) uniquement lors de l'inscription de celleux-ci à
        l'info-lettre. L’utilisateur·trice fournit ces informations en toute
        connaissance de cause, notamment lorsqu’il procède par lui-même à leur
        saisie. Il est alors précisé à l’utilisateur le caractère obligatoire ou
        non des informations qu’il serait amené à fournir.
      </p>

      <h2>Cookies et traceurs</h2>
      <p>
        Ce site n'utilise <strong>aucun cookie</strong> et{" "}
        <strong>aucun traceur</strong> (tracker).
      </p>
      <ul>
        <li>Pas de cookies publicitaires.</li>
        <li>Pas de cookies de réseaux sociaux.</li>
        <li>Pas d'outils de mesure d'audience.</li>
      </ul>
      <p>Vous pouvez naviguer sur l'ensemble du site sans être pisté.</p>

      <h2>Hébergement et journaux serveur</h2>
      <p>Le site est hébergé par Cloudflare Pages.</p>
      <p>
        Comme tout hébergeur, Cloudflare peut collecter techniquement des
        journaux de connexion (logs) standards (adresse IP, date de connexion,
        pages visitées) à des fins de sécurité et de maintenance du service
        (détection d'attaques DDoS, etc.). Ces données ne sont pas exploitées
        par l'équipe éditoriale du site à des fins de profilage ou de marketing.
      </p>
      <p>
        Pour plus d'informations, vous pouvez consulter la politique de
        confidentialité de Cloudflare :
        <Link href="https://www.cloudflare.com/privacypolicy/">
          https://www.cloudflare.com/privacypolicy/
        </Link>
      </p>

      <h2>Liens vers des sites tiers</h2>
      <p>
        Le site peut contenir des liens vers d'autres sites web (sources
        officielles, articles de presse, etc.).
      </p>
      <p>
        Si vous cliquez sur ces liens, vous quittez{" "}
        <strong>les-fourmilieres.org</strong>. Nous n'avons aucun contrôle sur
        ces sites externes, qui peuvent avoir leur propre politique de
        confidentialité et utiliser des cookies. Nous vous invitons à consulter
        leurs mentions légales respectives.
      </p>

      <AntSeparator />
      <p>
        <br />
      </p>
      <p>Dernière mise à jour : 10 juillet 2026.</p>
    </Section>
  );
}

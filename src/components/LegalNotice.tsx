import { AntSeparator } from "./AntSeparator";
import { Link } from "./Link/Link";
import { Section } from "./Section";

export function LegalNotice() {
  return (
    <Section>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>les-fourmilieres.org</strong> est édité par un collectif
        d'associations, de syndicats, d'entreprises et de citoyen·nes constitué
        de manière informelle, aux opinions politiques plurielles et engagé en
        faveur d'un monde solidaire et contre le fascisme.
      </p>

      <h2>Responsabilité de la publication</h2>
      <p>
        La responsabilité de la publication est{" "}
        <strong>assumée collectivement</strong> par les membres du collectif
        éditorial.
      </p>
      <p>
        Les contenus publiés sur ce site relèvent d’un travail collaboratif. Ils
        visent à informer le public sur les intentions du festival Les
        Fourmilières et à communiquer sur l'ensemble des évènements qui
        constituent la programmation du festival.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question, remarque ou demande relative au contenu du site,
        vous pouvez nous contacter à l’adresse suivante :
      </p>
      <p>
        <Link href="mailto:lesfourmilieres@proton.me">
          lesfourmilieres@proton.me{" "}
        </Link>
      </p>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <p>
        Cloudflare Pages Cloudflare, Inc. 101 Townsend St San Francisco, CA
        94107 États-Unis https://www.cloudflare.com
      </p>

      <h2>Données personnelles et cookies</h2>
      <h3>Informations personnelles collectées</h3>
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

      <h3>Analyse statistique et confidentialité</h3>
      <p>
        Aucun outil n'a été déployé sur le site{" "}
        <strong>les-fourmilieres.org</strong> permettant le suivi et l'analyse
        de la navigation des visiteurs du site. <strong>Aucune données</strong>{" "}
        (ni cookie, ni fingerprint, ni rien) n'est donc stocké afin d'analyser
        le comportement les visiteurs sur le site.
      </p>

      <h3>Rectification des informations nominatives collectées</h3>
      <p>
        Conformément aux dispositions de l’article&nbsp;34 de la loi
        n°&nbsp;48-87 du 6 janvier 1978, l’utilisateur dispose d’un droit de
        modification des données nominatives collectées le concernant. Les
        seules données étant celles relatives à l'inscription à la newsletter,
        un lien dans chaque courriel envoyé permet à l'utilisateur de modifier
        ou supprimer ses informations personnelles.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        Les informations publiées sur ce site sont proposées dans un objectif
        d’information quant à l'organisation du festival « Les Fourmilières ».
        Malgré le soin apporté à leur exactitude et à leur mise à jour, des
        erreurs ou omissions peuvent subsister.
      </p>
      <p>
        Le collectif ne saurait être tenu responsable de l’usage qui pourrait
        être fait des informations diffusées.
      </p>

      <h2>Évolution des mentions légales</h2>
      <p>
        Les présentes mentions légales peuvent être modifiées à tout moment afin
        de refléter l’évolution du site, de ses usages ou du cadre
        réglementaire.
      </p>

      <AntSeparator />
      <p>
        <br />
      </p>
      <p>Dernière mise à jour : 10 juillet 2026.</p>
    </Section>
  );
}

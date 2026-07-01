import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import { Link, LinkButton } from "../components/Link/Link";
import { AntSeparator } from "../components/AntSeparator";
import { RotatingText } from "../components/RotatingText";
import { CagnotteHeader } from "../components/Cagnotte/CagnotteHeader";
import { useMotionValue } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { Newsletter } from "../components/Newsletter/Newsletter";

export const Route = createFileRoute("/participer-au-festival")({
  component: RouteComponent,
});

const Container = styled.article`
  max-width: var(--textMaxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
  box-sizing: border-box;
`;

const ActionItem = styled.li`
  margin: 0 0 32px;
`;

const titleVariations = [
  "d’une structure militante",
  "d’une librairie",
  "d’un syndicat",
  "d’un lieu culturel",
  "d’une association sportive",
  "d’un cinéma",
  "d’un tiers-lieu",
];

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const defaultProgress = useMotionValue(0);
  return (
    <Container>
      <h1>Comment participer au festival&nbsp;?</h1>
      <h2>
        Je fais partie&nbsp; <RotatingText variations={titleVariations} />
      </h2>
      <ul>
        <li>
          vous êtes situé·e dans l'Aude, l'Aveyron, le Gard, l'Hérault ou la
          Lozère.
        </li>
        <li>
          vous êtes en accord avec l'ensemble de{" "}
          <Link href="/la-charte">la charte du festival</Link>.
        </li>
        <li>
          vous souhaitez organiser un ou plusieurs évènements durant le festival
          ou mettre à disposition votre lieu pour accueillir le festival.
        </li>
      </ul>
      <p>
        <strong>
          Contactez-nous via l'e-mail{" "}
          <Link href="mailto:lesfourmilieres@proton.me">
            lesfourmilieres@proton.me
          </Link>
        </strong>
      </p>

      <AntSeparator />
      <br />
      <h2>
        Je fais partie d&apos;une troupe artistique qui souhaite performer
      </h2>
      <p>
        <strong>
          Contactez-nous via l'e-mail{" "}
          <Link href="mailto:lesfourmilieres@proton.me">
            lesfourmilieres@proton.me
          </Link>
        </strong>
      </p>

      <AntSeparator />
      <h2>Je suis un·e particulier qui souhaite contribuer au festival</h2>
      <ul>
        <ActionItem>
          Soutenez-nous via la cagnotte afin de défrayer les intervenant·es,
          rémunérer les artistes et technicien·nes, nous donner les moyens de
          communiquer le plus largement possible et permettre un accès gratuit
          pour tous·tes à l'ensemble des évènements.{" "}
          <CagnotteHeader progress={defaultProgress} isMobile={false} />
        </ActionItem>

        <ActionItem>
          Mettez-vous en relation avec les organisations participantes près de
          chez vous pour offrir un peu de votre temps et de vos compétences.
        </ActionItem>

        <ActionItem>
          Partagez les publications du festival et des structures participantes
          :
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 0 0",
            }}
          >
            <LinkButton
              href="https://www.instagram.com/lesfourmilieres/"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <FaInstagram /> Instagram
            </LinkButton>
          </div>
        </ActionItem>

        <ActionItem>
          Abonnez-vous à l’infolettre des Fourmilières :
          <Newsletter disableTitle />
        </ActionItem>

        <ActionItem>
          Venez au festival avec des proches, du 25 septembre au 11 octobre
          2026, et parlez-en autour de vous !
        </ActionItem>
      </ul>
    </Container>
  );
}

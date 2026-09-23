import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import styled from "styled-components";
import { searchParams } from "../components/Agenda/SearchParams";
import cover from "../assets/anticra/anticra.png?url";
import { Agenda } from "../components/Agenda/Agenda";

export const Route = createFileRoute("/mobilisation-contre-cra-beziers")({
  component: RouteComponent,
  validateSearch: searchParams,
});

const Covers = styled.aside`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: center;
  margin-bottom: 30px;
`;

const CovertPart = styled.img`
  max-width: 550px;
  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <main>
        <h1>Mobilisation contre le CRA de Béziers</h1>
        <Covers>
          <CovertPart
            src={cover}
            alt={
              "Affiche pour la mobilisation contre le Centre de Rétention Administratif (CRA) de Béziers"
            }
          />
        </Covers>
        <p>
          Adissiatz! Nous sommes une interorga de personnes s’organisant autour
          des frontières et contre l’enfermement dans le sud de la fRance, des
          Pyrénnées aux Alpes en passant par la Méditérranée, l’Occitanie. Nous
          souhaitons la disparition des frontières et la libre circulation de
          toustes ! Nous vous invitons à nous rejoindre pour un we de
          mobilisation les 3 et 4 octobre 2026 contre la construction du CRA de
          Béziers. Ce sera l’occasion de partir du cas de Béziers pour élargir
          la mobilisation contre le continuum colonial entre frontières et
          enfermement, restrictions des libertés et fabrique de
          l’illégalité.{" "}
        </p>
        <p>
          Depuis le cas d’Arenc à Marseille, un hangar servant à emprisonner les
          personnes Algériennes en vue de les expulser après la révolution pour
          l’indépendance de l’Algérie, les lieux d’enfermement n’ont fait que se
          multiplier. CRA signifie Centre de Rétention Administratif, autrement
          dit une prison pour les personnes qui n’auraient pas les « bons »
          papiers. Au délà des CRA, nous militons contre toutes formes
          d’enfermement que ce soit les prisons, l’assignation à résidence ou
          les « zones d’attente », des zones d’enfermement aux frontières. En
          2023, l’Etat fRançais a annoncé un grand plan d’augmentation des
          places de rétention administrative afin d’atteindre 3000 places en
          2027 en CRA et Locaux de Rétention Administratifs (voir{" "}
          <a
            href="http://toulouseanticra.noblog.org"
            target="_blank"
            rel="noopener noreferrer ugc"
          >
            toulouseanticra.noblog.org
          </a>
          ). À Béziers, le projet est de construire un CRA de 140 places. Le
          terrain a déjà été choisi. Une fois n’est pas coutume, il se trouve
          près de la prison, mettant en lumière la continuité entre ces deux
          formes d’enfermement. En effet, il est maintenant systématique qu’une
          personne étrangère soit transférée en CRA après un passage en prison.
          Depuis le dernier we de mobilisation en octobre dernier, le terrain a
          été clotûré et mis sous vidéo-surveillance. Il est plus que jamais
          urgent de se mobiliser pour que ce projet ne voit pas le jour.{" "}
        </p>
        <p>
          Nous sommes dans un contexte où la répression et le contrôle des corps
          ne font qu’augmenter. Les mots d'ordre du Pacte européen sur la
          migration et l'asile, adopté en avril 2024 sont : identification,
          contrôle, fichage, filtrage, enfermement, expulsion. Ainsi, en zones
          d’attente, les personnes pourront être enfermées jusqu’à 6 mois,
          contre 26 jours actuellement. Le réglement retour, adopté le 9 mars
          2026 projette d’externaliser les expulsions avec des centres de
          détention hors UE appellé « hubs de retours ». Ce ne sont que quelques
          exemples du tournant sécuritaire et répressif que représentent ces
          deux lois, pour le volet enfermement. Il ne faut cependant pas oublier
          qu’elles s’incrivent dans un processus déjà bien rodé de fabrique de
          l’illégalité, que ce soit pour les personnes sans les « bons » papiers
          ou par la lutte contre le « narcotrafic » dont le résultat est
          toujours la privation de libertés. La précarisation des personnes
          ciblées par ces mesures permet la mise à disposition d’une main
          d’oeuvre à bas coût poour enrichir les élites. Alors feu aux prisons,
          feu aux CRA, feu aux frontières ! Solidarité avec toutes les personnes
          ciblées par l’illégalité! Rejoignez-nous les 3, 4 octobre à
          Montpellier pour résister à ce système fasciste, impérialiste et
          colonial.
        </p>

        <Section>
          <Agenda
            path={Route.to}
            disableMap
            disableDateFilder
            disableTypeFilter
          />
        </Section>
      </main>
    </Section>
  );
}

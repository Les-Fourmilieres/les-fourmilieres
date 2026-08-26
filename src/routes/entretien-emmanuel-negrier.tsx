import { createFileRoute } from "@tanstack/react-router";
import {
  Answer,
  Article,
  Figure,
  Introduction,
  Question,
  Subtitle,
} from "../Article";

export const Route = createFileRoute("/entretien-emmanuel-negrier")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: `🐜 Les Fourmilières · Entretien avec Emmanuel Négrier` },
      {
        name: "description",
        content: `Entretien avec Emmanuel Négrier : les « quatre P » du renversement`,
      },
      {
        property: "og:title",
        content: `Entretien avec Emmanuel Négrier : les « quatre P » du renversement`,
      },
      {
        property: "og:description",
        content: `Entretien avec Emmanuel Négrier : les « quatre P » du renversement`,
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: "https://les-fourmilieres.org/emmanuel-negrier-entretien.webp",
      },
    ],
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Entretien avec Emmanuel Négrier</h1>
      <Subtitle>Les « quatre P » du renversement</Subtitle>

      <Figure
        style={{ backgroundImage: `url('emmanuel-negrier-entretien.webp')` }}
      />

      <Introduction>
        Emmanuel Négrier est chercheur CNRS en science politique au Centres
        d'études politiques et sociales (CEPEL) à l'université de Montpellier.
        Il a notamment travaillé sur l'extrême droite régionale et les
        problématiques liées à la culture.
      </Introduction>

      <Question>
        L’extrême droite est présente de différentes manières dans la région,
        concrètement, comment se manifeste les extrêmes droites à l’échelle
        régionale&nbsp;? Sur quel terrain&nbsp;?
      </Question>

      <Answer>
        Je vais surtout parler du terrain électoral, sur lequel j’ai travaillé.
        On observe une présence du Front National et globalement de l’extrême
        droite dans la région depuis les années 1980.
        <br />
        <br />
        Lors des premières élections européennes du Front National, en 1984, le
        parti de Jean-Marie Le Pen obtient 10 députés grâce à 2 millions de
        personnes. Parmi celles-ci, des citoyen.nes des communes bourgeoises de
        la région où le vote de droite se radicalise. Notamment dans l’Hérault
        et les Pyrénées-Orientales (plus de 14% des voix), avec une percée à
        Perpignan (21% des suffrages exprimés).
        <br />
        <br />
        Depuis 1986 jusqu’à aujourd’hui, la composition socio-électorale a
        changé. On identifie un triple espace de prédilection : le périurbain -
        comme Frontignan ou le Bas-Languedoc- (en sachant que les grandes villes
        ne sont pas des terrains faciles pour l’ED)&nbsp;; le littoral, où le FN
        puis le RN progresse de manière significative&nbsp;; et des bastions
        spécifiques, au nombre de trois, où la croissance est encore plus
        élevée&nbsp;: la plaine roussillonnaise, le biterrois, et la petite
        Camargue - avec extension vers le Gard rhodanien - où le RN s’implante à
        l’échelle municipale.
        <br />
        <br />
        Le phénomène est en constante progression depuis la fin des années 1980
        avec, depuis les années 2010, une inversion des tendances. En effet, si
        le FN/RN était jusque-là handicapé par les villes et le monde rural dans
        la région, il réussit à pénétrer petit à petit le monde rural - en
        particulier dans l’Aude, le Gard et les Pyrénées-Orientales. Marine Le
        Pen obtiendra, parmi ses meilleurs scores à l’élection présidentielle de
        2012, plus de 22% dans les départements de l’ex-Languedoc-Roussillon.
        Aux régionales de 2015, dans les Pyrénées-Orientales, 41% des voix
        s’expriment en faveur du candidat FN. Finalement, on se rend compte que
        l’extrême-droite n’est plus en terre de mission dans les espaces
        ruraux&nbsp;: elle y prend racine aussi.
        <br />
        <br />
        D’ailleurs, on constate dans ces années-là et jusqu’en 2022 un gros
        différentiel entre l’ex-Languedoc-Roussillon et l’ex-Midi-Pyrénées. Mais
        les élections de 2024 (européennes et législatives anticipées) font
        émerger une égalisation du territoriale avec une progression du RN. En
        effet, si l’Ouest se montrait plus réfractaire que l’Est à l’extrême
        droite, aujourd’hui elle progresse dans l’ex Midi-Pyrénées avec certains
        exemples marquants : Moissac dans le Tarn-et-Garonne qui qualifie une
        candidate RN à 49% au premier tour des législatives anticipées de 2024,
        ou encore, pas très loin de là, Montauban, où la candidate UDR se
        qualifie pour le second tour à 43% des suffrages lors de la même
        élection.
        <br />
      </Answer>

      <Question>
        Dans un article de 2023, vous écriviez que «&nbsp;l’élection 2022 marque
        un certain établissement du Rassemblement national&nbsp;». Est-ce que
        les deux élections de 2024 et celles de 2026 viennent le
        renforcer&nbsp;? Quelle est l’évolution de l’extrême droite des
        partis&nbsp;?
      </Question>

      <Answer>
        Sur les élections municipales de 2026, on peut dire que le RN a
        progressé. Dans l’ex-Languedoc, on passe de 1 à 2% des communes
        gouvernées par l’extrême droite, de 90 000 personnes concernées à 250
        000. Soit 10% de la population des départements concernés. Mais c’est
        une progression qui reste délicate. Car en dépit de son discours, où il
        prétend être «&nbsp;le parti des oubliés territoriaux de la
        République&nbsp;», et de sa proximité avec la Coordination Rurale, le RN
        a montré de grandes difficultés à pénétrer aux élections municipales
        dans ces espaces.
        <br />
        <br />
        Par exemple en Lozère, qui est le département le plus rural de France,
        pas une seule liste RN ne s’est présentée. Il y a une grand écart entre
        le discours d’un RN qui serait devenu hégémonique dans le monde rural,
        et la réalité de la difficulté à présenter des listes, et donc à
        l’emporter.
        <br />
        <br />
        Dans le monde rural, on a en revanche assisté à une forte augmentation
        de votes blancs et nuls, qui s’interprète en partie comme un mode de
        contestation de la réforme électorale des listes paritaires et de la fin
        du panachage. Celle-ci a été perçue comme la privation d’une capacité
        d’expression démocratique des électeurs et électrices. À
        Ferrals-les-Montagne par exemple, dans la montagne Noire héraultaise, la
        commune de 118 habitants qui présentait une seule liste a vu son taux de
        votes blancs et nuls atteindre 45%.
      </Answer>

      <Question>
        D’après Street-Press, l’Occitanie compte une trentaine de groupuscules
        d’extrême droite sur son territoire. Y’en a-t-il plus qu’ailleurs&nbsp;?
        Ont-ils des spécificités&nbsp;?
      </Question>
      <Answer>
        N’ayant que peu travaillé sur le sujet, je ne vous dirai que rien de
        plus que ce que vous pourriez lire dans les travaux de recherche et
        écrits journalistiques. Il y a sur le territoire occitan une extrême
        droite radicale, violente, on sait qu’elle existe depuis longtemps et
        qu’en France, la frontière entre l’extrême droite électorale et ces
        groupuscules est extrêmement faible.
        <br />
        <br />
        En effet, le RN peut s’appuyer sur l’existence de ces groupes, avec
        lesquels il entretient, de manière invisible, des relations de
        camaraderie, voire de complicité. Le jeu de cette extrême droite
        violente et non électorale permet à l’extrême droite électorale
        d’apparaître modérée. C’est une manière d’ouvrir la fenêtre d’Overton,
        et pour l’extrême droite électorale de dire «&nbsp;ils ont sans doute
        raison mais ils vont trop loin, donc votez pour nous&nbsp;».
      </Answer>

      <Question>
        Que peut-on comprendre des raisons liant la population occitane aux
        extrêmes droites&nbsp;? Comment expliquer le succès de l’ED&nbsp;?
      </Question>

      <Answer>
        Il y a plusieurs raisons pour lesquelles l’extrême droite, et notamment
        le Rassemblement National progresse tant. D’abord, sur le profil
        sociologique du RN, on peut dire qu’il a changé depuis la fin des années
        2010. Là où il était très masculin, il devient à peu près égalitaire. Là
        où les jeunes et les plus âgés évitaient ce parti, ils font désormais
        partie des électeurs du RN quasiment au même titre que les autres
        partis. Il y a une moyennisation sociologique de l’électorat RN. Si l’on
        compare tous les partis sur le plan sociologique, en 2022, l’électeur
        LFI représente le mieux la moyenne ; en 2024, c’est l’électeur RN.
        C’est-à-dire qu’il n’y a pas de surreprésentation manifeste d’une
        certaine catégorie sociale : pas plus de jeunes que de personnes âgées,
        pas plus de femmes que d’hommes.
        <br />
        <br />
        Le seul élément qui différencie le RN et fait qu’il ne s’agit pas d’un
        vote «&nbsp;comme les autres&nbsp;» tient au niveau de diplôme de son
        électorat. On peut toujours observer qu’un faible niveau de diplôme est
        prépondérant chez l’électorat FN/RN.
        <br />
        <br />
        Le deuxième point sur lequel le RN joue fortement, c’est qu’il n’a pas
        de bilan à porter. C’est donc le parti le mieux placé pour agréger tous
        les mécontentements, potentiellement contraires entre eux d’ailleurs.
        Quand le RN déploie son discours en faveur de la ruralité, il touche une
        partie de ceux qui déplorent le retrait des services publics, mais les
        projets qu’il présente devant le Medef défendent tout autre chose.
        Finalement le RN joue d’une fonction tribunicienne : prendre bruyamment
        la défense de tous les mécontents du pays contre le cours des choses.
        Par le bénéfice de celui qui n’a pas gouverné, mais aussi par la
        stratégie des partis concurrents, le RN peut devenir hégémonique à
        droite. Comme dans l’Aude, où le fait que la droite ait déserté le
        scrutin aux élections départementales a contribué à créditer le RN comme
        force politique dominante à droite.
        <br />
        <br />
        Enfin, le RN est un parti qui se développe en tâche d’huile. Dans les
        trois territoires dont je parlais précédemment (la plaine
        roussillonnaise, le biterrois et la petite Camargue étendue), on a
        d’abord vu des scores atteignant 20%. Mais aujourd’hui, dans ces
        communes, c’est 30, 40 voire 50% de suffrages en faveur des candidats
        d’extrême droite que l’on constate. Le vote RN progresse en tâche
        d’huile&nbsp;: lorsqu’on sait que dans son voisinage il y a 10% des
        votes en sa faveur, cela reste marginal et ne constitue pas un levier
        pour les autres. C’est différent quand plus de 30% ou 40% des gens
        votent pour l’extrême droite. Là il y a un sentiment différent qui
        émerge&nbsp;: on se sent plus légitime d’en discuter, d’afficher ses
        positions, puis de mettre un bulletin, tandis que ceux qui y restent
        réfractaires hésitent désormais à s’exprimer. Cet effet de tâche d’huile
        vaut pour les communautés villageoises ou périurbaines. Mais elle vaut
        aussi pour analyser la progression territoriale du RN depuis des
        bastions spécifiques vers des espaces plus larges&nbsp;: ainsi dans le
        Gard, on est passé d’une implantation spécifique (petite Camargue&nbsp;;
        Gard rhodanien) à une territorialisation presque homogène&nbsp;:
        l’extrême droite grimpe même dans les Cévennes, qui lui ont longtemps
        été totalement réfractaires.
      </Answer>

      <Question>
        Sur cette question de l’électorat du RN, y’a-t-il une ou des
        particularités régionales&nbsp;?
      </Question>
      <Answer>
        Toutes les régions françaises présentent des nuances, et celles où le RN
        devient majoritaire le sont aussi. On peut notamment citer la thèse
        d’Arnaud Huc que j’ai encadrée il y a quelques années, qui comparait la
        sociologie du RN entre le Nord et le Sud. En est ressortie une certaine
        différenciation des populations dominantes dans le vote RN : plus
        ouvrière au Nord tandis qu’au Sud, c’est plus une classe moyenne à
        faible diplôme, qui se sent menacée dans son identité sociale ou
        territoriale, qui constitue sa force principale. Les deux groupes se
        retrouvent sur un point : percevoir l’Autre comme une menace.
        <br />
        <br />
        C’est donc un électorat davantage populaire au Nord, et plus
        petit-bourgeois au Sud. Mais il est à noter que ces nuances tendent à
        s’atténuer, à la faveur de la moyennisation sociologique dont je parlais
        auparavant, ce qui est logique.
      </Answer>

      <Question>
        Vous avez beaucoup travaillé sur les politiques culturelles. Après avoir
        décrit la progression électorale et territoriale de l’extrême droite en
        Occitanie, peut-on dire que la culture constitue elle aussi un terrain
        de conquête pour le RN ?
      </Question>
      <Answer>
        Oui, et cette conquête passe par un renversement de la relation entre
        culture et politique. Pendant longtemps, l’idée était de « se grandir
        par la culture » : les responsables politiques pouvaient « faire de la
        politique avec de la culture », tandis que les acteurs culturels
        faisaient « de la culture avec la politique », dans une forme d’«
        adversité coopérative ». La culture pouvait donc être soutenue par des
        pouvoirs publics sans que ceux qui en bénéficiaient aient à partager
        leurs préférences politiques. Ce modèle est aujourd’hui affaibli et l’on
        voit apparaître, notamment avec l’extrême droite, l’idée inverse : « se
        grandir contre la culture ».
        <br />
        <br />
        À Perpignan, nous avons identifié quatre dimensions de ce renversement,
        les « quatre P » : patrimonialisme, privatisation, politisation et
        proscription. Le patrimonialisme correspond à un recentrage sur une
        certaine vision du patrimoine, censé contribuer au « réarmement moral de
        la France », à mille lieues des approches publiques contemporaines,
        esthétiquement et socialement diversifiées. La privatisation consiste à
        déconstruire l’approche publique de la culture et à renvoyer davantage
        au choix individuel et au marché les enjeux d’accès et d’efficience. La
        politisation, elle, revient sur la délégation des choix artistiques aux
        professionnels : c’est le retour à une ingérence directe du pouvoir dans
        les dossiers, dont la formule de Sébastien Chenu — « c’est celui qui
        paie l’orchestre qui choisit la musique » — est une parfaite
        illustration.
        <br />
        <br />
        Enfin, la proscription concerne les acteurs culturels qui se situent à
        l’opposé des préférences frontistes, notamment ceux qui travaillent au
        plus près des quartiers populaires et de l’action culturelle. À
        Perpignan, il ne s’est d’ailleurs pas agi de réduire globalement le
        financement culturel, mais de conforter certains acteurs déjà
        privilégiés par la droite et d’en marginaliser d’autres. C’est une forme
        de populisme assez paradoxale : un populisme contre le peuple, puisque
        les acteurs les plus fragiles sont aussi ceux qui travaillent le plus
        directement auprès des ménages et quartiers populaires. Et l’on retrouve
        ici une logique de conquête de l’hégémonie à droite, plutôt qu’une
        simple politique de réduction budgétaire.
        <br />
        <br />
        Ces quatre « P » peuvent enfin être lus à la lumière de Levitsky et
        Ziblatt et de leurs deux principes fondamentaux de la démocratie, la
        tolérance et la tempérance, qui sont mis à mal. La tolérance suppose de
        respecter, une fois arrivé au pouvoir, la diversité des visions portées
        par les vaincus ; c’est précisément ce que la politisation remet en
        cause. La tempérance impose de ne pas faire un usage radical et
        autocentré du mandat obtenu ; c’est ce qu’attaquent les différentes
        formes de proscription. Au fond, l’enjeu culturel n’est donc pas
        secondaire : il révèle une transformation plus générale du rapport de
        l’extrême droite au pouvoir, où l’on ne cherche plus seulement à gagner
        une élection, mais à utiliser la victoire pour redéfinir ce qui est
        légitime dans la société.
      </Answer>
    </Article>
  );
}

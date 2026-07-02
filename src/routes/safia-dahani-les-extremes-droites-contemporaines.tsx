import { createFileRoute } from "@tanstack/react-router";
import {
  Answer,
  Article,
  Figure,
  Introduction,
  Question,
  Subtitle,
} from "../Article";

export const Route = createFileRoute(
  "/safia-dahani-les-extremes-droites-contemporaines",
)({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: `🐜 Les Fourmilières · Entretien avec Safia Dahani` },
      {
        name: "description",
        content: `Entretien avec Safia Dahani : Processus de banalisation des extrêmes droites`,
      },
      {
        property: "og:title",
        content: `Entretien avec Safia Dahani : Processus de banalisation des extrêmes droites`,
      },
      {
        property: "og:description",
        content: `Entretien avec Safia Dahani : Processus de banalisation des extrêmes droites`,
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: "https://les-fourmilieres.org/entretien-sofia-dahani.webp",
      },
    ],
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Entretien avec Safia Dahani</h1>
      <Subtitle>Processus de banalisation des extrêmes droites</Subtitle>

      <Figure
        style={{ backgroundImage: `url('entretien-sofia-dahani.webp')` }}
      />

      <Introduction>
        Doctorante en science politique, post-doctorante en sociologie, la
        toulousaine Safia Dahani répond à nos questions autour de ce qu'est
        fondamentalement l'extrême droite (ED), qu'elle préfère nommer au
        pluriel, des liens avec le fascisme et du processus de banalisation de
        l'ED, son objet d'étude.
      </Introduction>

      <Question>
        Comment définiriez-vous les termes d’extrême droite et de
        fascisme&nbsp;?
        <br />
        Quels sont les liens entre les deux&nbsp;?
      </Question>

      <Answer>
        Les débats académiques sont nombreux pour jauger des qualificatifs à
        mobiliser pour caractériser ce que je, comme d'autres, continue de
        nommer les extrêmes droites contemporaines. D'abord, depuis les années
        1980, un certain nombre de chercheurs considèrent qu'on ne peut plus
        dire extrême-droite pour diverses raisons qui me semblent fallacieuses:
        leur nécessaire mue 'non violente' à la suite de la fin de la seconde
        guerre mondiale et de la guerre d'Algérie, leur démocratisation (car les
        partis d'extrême droite participent aux élections). Ils vont alors y
        préférer d'autres termes, comme celui des droites radicales, ou des
        droites radicales populistes... De mon point de vue l'emploi de ces
        termes contribue à dépolitiser les extrêmes droites. Sur le fascisme, il
        y a aussi de nombreux débats, au regard des caractéristiques des
        fascismes qu'on dit "historiques" et de ceux plus contemporains. La
        principale question est alors de savoir si l'extrême droite
        d'aujourd'hui se confond avec ces fascismes (allemands, italiens).
        Certains, à l'instar de l'historien E. Traverso, vont proposer de
        nouvelles manières de penser le fascisme, en parlant de post-fascisme ou
        de néo- fascisme par exemple, en expliquant que certains groupes
        (notamment dans l'espace des mouvements sociaux) ont gardé des certaines
        de leurs caractéristiques (visions du monde totalitaires, néo nazisme,
        violence politique) tout en s'adaptant au jeu politique contemporain. U.
        Palheta évoque aussi le fascisme contemporain, autour des dynamiques de
        fascistation de la société dans son ensemble. P. Lehingue et B. Pudal
        vont caractériser le FN-RN de parti "fascisant"... Je pense qu'il est un
        peu vain de comparer trait pour trait le début du XXème siècle avec la
        période contemporaine mais qu'on peut trouver, par analogie, des points
        d'accroche entre des phénomènes historiques et ce qu'il se passe
        aujourd'hui. Dit autrement, on peut surement penser des formes de
        continuité depuis la "naissance" des extrêmes droites à la fin du XIXè
        siècle et la manière dont les partis et groupuscules jouent le jeu
        politique. En termes d'idées par exemple, le logiciel de pensée centrale
        est toujours raciste, différentialiste, il naturalise toujours tous
        types d'égalités. En termes de construction d'ennemis publics ensuite,
        on parle beaucoup de déplacement de l'antisémitisme à l'islamophobie
        mais déjà dans les années 1980 le RN dénonce ces deux populations, en
        évoquant un Islam politique qui contribuerait à une submersion
        migratoire en France. En termes de répertoires d'action, le fait de
        participer aux élections n'est pas selon moi un bon argument pour dire
        que les extrêmes droites se sont normalisées et déradicalisées: tout le
        but du FN en 1972 lorsqu'il est fondé c'est justement de combattre dans
        les urnes, de faire un pas de côté avec les stratégies de la rue,
        l'argument me semble tautologique... Pour résumer: il faut penser les
        extrêmes droites contemporaines (qu'on peut- doit toujours nommer comme
        telles au regard de leurs caractéristiques politiques) dans leurs
        "contextes": ces partis et mouvements s'adaptent... mais leurs cœurs
        idéologiques et leurs motivations politiques ne me semblent pas avoir
        été transformées.
      </Answer>

      <Question>
        Peut-on être antifasciste sans faire de la lutte contre l'extrême droite
        une priorité ?
      </Question>
      <Answer>
        Il est à mon sens difficile de se dire antifasciste si on ne met pas
        tout en haut de la hiérarchie des priorités la lutte contre les extrêmes
        droites dans leur ensemble: soit des partis, des groupuscules mais aussi
        un ensemble d'idées qui sont diffusées, de longue date, dans des espaces
        qu'on ne pense a priori pas d'extrême droite. Je pense ici aux formes de
        droitisation du débat public dans un certains nombre de médias (pas
        forcément réactionnaires), dans certains partis politiques (dont la
        droite mais aussi le 'bloc central'...) Être antifasciste à gauche me
        semble être une des caractéristiques pour se dire "de gauche", et cela
        veut aussi sûrement aussi dire qu'il faut combattre les préjugés
        racistes au sein de cet espace, dans les partis et groupes militants qui
        le composent qui n'en sont pas exempts... Les travaux de F. Faury nous
        montrent bien que les ressorts du vote RN sont très imbriqués avec
        diverses formes de politisation du racisme, qui n'est pas exclusif à ces
        groupes d'électeurs particuliers. Cela est présent dans toute la
        société.
      </Answer>

      <Question>
        Votre objet de recherches en science politique porte notamment sur la
        légitimation de l’extrême droite à travers le Rassemblement National.
        Quelles sont vos analyses de ce processus de banalisation de l’Extrême
        Droite ?
      </Question>

      <Answer>
        La banalisation peut s'entendre comme un processus large de
        dépolitisation d'un ensemble de propositions et de pratiques politiques.
        On traite de cette question avec C. Deville dans un récent numéro de la
        revue <i>Savoir/Agir</i>. L'idée c'est que le RN par exemple n'est pas
        le seul ni le principal agent de son propre succès, au regard de
        différents paramètres: l'inertie de son organisation, sa faible
        dimension territoriale, sa professionnalisation inégale, son
        fonctionnement tourné sur lui même... Et qu'il y a un ensemble de
        logiques qui contribuent à légitimer ses idées, ses propositions, ses
        porte paroles "sans en avoir l'air". Certaines ont trait à l'espace
        journalistique: il y a depuis les années 2010 une forme de médiatisation
        dissonante de M. Le Pen qui est très présente à la télévision notamment
        alors qu'elle n'était "que" présidente de son parti, qui ne disposait
        pas d'élus à l'Assemblée... Il y a aussi selon d'autres travaux qui ont
        étudié l'évolution des cadrages journalistiques, une forme de
        droitisation de ces derniers pour penser l'immigration mais depuis les
        années 2000. Donc il y a une sorte de processus assez long qui va petit
        à petit mettre tout en haut de l'agenda médiatique les problèmes publics
        eux mêmes consacrés par l''extrême droite qui n'a plus vraiment besoin
        de faire d'efforts pour s'aligner sur ce dernier, ses préoccupations
        étant déjà mises à l'agenda (immigration, insécurité, etc.). Cela
        s'opère aussi avec l'aide d'autres formations politiques qui, parfois en
        croyant "bien faire" (et récupérer les électorats du RN) vont
        progressivement s'aligner sur ces enjeux, le cas des Républicains est
        assez emblématique, puisque son président a scissionné pour rejoindre
        une alliance avec l'extrême droite. Mais on peut aussi penser à la
        gestion des migrations du côté du gouvernement (loi immigration qui
        mettait en avance... la préférence nationale) ou encore les fortes
        croyances à gauche que ces problèmes publics sont véritablement
        importants (notamment au regard des nombreux sondages censés le
        confirmer) et qui vont alors chercher eux aussi, parfois dans les mêmes
        termes que le centre ou la droite, des réponses aux questions
        migratoires ou "sécuritaires"... On pourrait aussi reparler du cas d'E.
        Zemmour, qui a pu devenir légitime en politique au regard de ses
        ressources médiatiques et journalistiques…
      </Answer>

      <Question>
        Depuis quelques années, on observe des tentatives de réappropriation de
        certains combats (féminisme, laïcité, écologie, droits LGBT) par des
        acteur·ices d’extrême droite, comment analysez-vous ces
        stratégies&nbsp;?
      </Question>

      <Answer>
        De mon point de vue c'est tout à fait logique car il s'agit de problèmes
        politiques contemporains. Sur le féminisme, certains collègues étudient
        des formes de fémonationalisme: c'est à dire proposer considérer que les
        problèmes que rencontrent les femmes dans la société sont principalement
        liées à l'immigration, pour les questions LGBTQIA+ on va parler
        d'homonationalisme... P. Lehingue et B. Pudal expliquent bien dans leur
        ouvrage qu'il faut penser le changement à l'extrême droite en prenant le
        cas du RN: les portes paroles actuels ne sont plus ceux des années 1970,
        ils ont été socialisés à d'autres problèmes politiques, sociaux. Donc je
        ne pense pas qu'il s'agisse de réappropriations: l'extrême droite n'est
        pas féministe, ni écologistes, elle ne défend pas les droits des
        minorités sexuelles... Au contraire, a minima elle considère qu'il
        s'agit de problèmes de second plan et, quand elle est au pouvoir (voir
        en Europe de l'Est), elle met en place des politiques restrictives pour
        les populations considérées comme différentes. En France, même si
        certains dirigeants du RN se disent non opposés au droit à l'avortement
        ou au mariage pour tous, il y a toujours une liberté de vote pour les
        députés et eurodéputés... qui pour une large partie continuent de se
        positionner contre ces propositions. Sur l'écologie, si on suit les
        travaux d'Antoine Dubiau (Ecofascisme) il y a une longue tradition
        idéologique à l'extrême droite pour penser la "nature" et
        "l'environnement", certainement pas dans les termes de l'écologie
        politique progressiste. A l'extrême droite on parle ainsi
        d'écoterrorisme... Pour conclure, je dirais que la reprise de ces thèmes
        évoqués dans votre question par l'extrême droite est une manière de
        s'aligner avec les problèmes politiques contemporains, tout en
        mobilisant encore et toujours des propositions très conservatrices sur
        ces sujets.
      </Answer>

      <Question>
        Enfin, quels contenus vous nous recommanderiez sur les sujets dont on
        vient de parler ?
      </Question>
      <Answer>
        Toutes les émissions de F. Culture qui portent sur l'extrême-droite,
        historique et contemporaine (dans LSD, Les Pieds sur Terre, Le temps du
        débat, Cultures Mondes...) ça permet souvent de faire varier les
        échelles (de l'extrême droite ordinaire - les électeurs jusqu'aux partis
        et formations du mouvement social, avec un regard à l'international,
        avec très souvent des chercheurs et experts reconnus qui s'expriment sur
        le sujet) Il y a aussi le podcast <i>Minuit dans le Siècle</i>. Je pense
        aussi aux émissions de <i>Blast</i> autour des travaux de J. Chapoutot,
        très utile pour des mises au point historiques rapidement accessibles,
        l'ensemble des ouvrages de cet auteur, désormais parfois publiés sous
        forme de BD comme <i>Libres d'Obéir</i>.
        <br />
        Je conseille aussi des revues scientifiques de vulgarisation
        (Savoir/Agir; The conversation; AOC): ce sont des chercheurs qui
        publient leurs travaux sourcés par des enquêtes de terrain mais sur des
        formats qui se lisent facilement, qui sont aisément accessibles quand on
        a pas le temps de se pencher sur des travaux universitaires…
      </Answer>
    </Article>
  );
}

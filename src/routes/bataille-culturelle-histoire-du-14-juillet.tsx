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
  "/bataille-culturelle-histoire-du-14-juillet",
)({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: `🐜 Les Fourmilières · L'histoire du 14 juillet` },
      {
        name: "description",
        content: `Bataille Culturelle : L'histoire du 14 juillet`,
      },
      {
        property: "og:title",
        content: `Bataille Culturelle : L'histoire du 14 juillet`,
      },
      {
        property: "og:description",
        content: `Bataille Culturelle : L'histoire du 14 juillet`,
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content:
          "https://les-fourmilieres.org/bataille-culturelle-histoire-du-14-juillet.webp",
      },
    ],
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Bataille Culturelle :</h1>
      <Subtitle>L'histoire du 14 juillet</Subtitle>
      <Figure
        style={{
          backgroundImage: `url('bataille-culturelle-histoire-du-14-juillet.webp')`,
        }}
      />
      <Introduction>
        Défilé militaire, discours nationaliste, invitation des chefs d’État
        pour valoriser la puissance française… tel qu’on le célèbre aujourd’hui,
        le 14 juillet n’a pas grand-chose à voir avec l’antifascisme. Mais
        saviez-vous qu’en 1935, la Gauche française (partis, syndicats &
        associations) rassemblait plus d’un demi million de personnes pour
        lutter contre le fascisme et ne pas laisser l’extrême droite envahir les
        Champs-Élysées ? Une mobilisation populaire qui aura lieu tous les ans
        jusqu’au massacre de 1953. Retour sur l’histoire du 14 juillet.
      </Introduction>

      <Question>1789&nbsp;: un 14 juillet révolutionnaire</Question>
      <Answer>
        Le 14 juillet trouve ses origines en 1789, lorsque des citoyens prennent
        la Bastille d’assaut. Ce jour-là, le prix du pain atteint son maximum
        depuis le règne de Louis XIV, et cela fait déjà 3 jours que des incident
        éclatent aux barrières de Paris. Le contexte insurrectionnel et les
        tensions politiques mènent plusieurs milliers de personnes à
        s’organiser. Une milice bourgeoise voit le jour, et au petit matin du 14
        juillet, les Invalides sont pillées de leurs armes. Le groupe, rejoint
        par des Parisiens de tous horizons (artisans, ouvriers, petits
        commerçants…) se lance pour mettre son plan en exécution&nbsp;: attaquer
        la Bastille, monument grandiose symbolique de la monarchie. La prise de
        la Bastille ouvre notamment la voie à l'abolition des privilèges et par
        là la fin du système féodal; et à la Déclaration des droits de l'homme
        et du citoyen, texte fondateur qui comprend le fameux article premier
        «&nbsp;les hommes naissent et demeurent libres et égaux en
        droits&nbsp;». Le 14 juillet originel n'est donc pas la célébration
        d'une victoire militaire, mais bien celle d'une insurrection populaire,
        en opposition à ceux qui voulaient éteindre la Révolution, et se
        réclamaient de l'ordre, de la tradition et des privilèges.
      </Answer>

      <Question>1880&nbsp;: le choix du 14 juillet</Question>

      <Answer>
        Mais si la fête nationale française reprend la même date, la réalité est
        plus ambiguë. En effet, lorsque se pose la question de déterminer une
        date de commémoration patriotique, la proposition du député Raspail fait
        débat&nbsp;: le 14 juillet 1789 évoque la Révolution et le sang versé,
        et n’incarnerait pas suffisamment l’unité. Pour éviter les divisions, la
        loi de 1880 se contente de retenir « le 14 juillet » sans préciser
        l'année. Les républicains modérés mettent en avant la Fête de la
        Fédération du 14 juillet 1790, célébration de l'unité nationale, tandis
        que les plus radicaux continuent de voir dans la prise de la Bastille le
        véritable acte fondateur. Dès son institution en 1880, le 14 juillet
        mêle bals populaires, cérémonies républicaines et défilés militaires.
        Après la Première Guerre mondiale, la dimension militaire prend
        progressivement une place plus importante&nbsp;; le défilé devient un
        hommage aux anciens combattants, une commémoration du sacrifice
        national, et surtout, une démonstration de puissance – que De Gaulle
        fera perdurer après la seconde guerre mondiale. Mais le 14 juillet ne
        fut jamais seulement une cérémonie d'État.
      </Answer>

      <Question>1935&nbsp;: un 14 juillet antifasciste</Question>
      <Answer>
        C’est derrière une banderole antifasciste que se réunissent 500 000
        personnes à Paris (d’autres rassemblements ont eu lieu dans toute la
        France) en ce 14 juillet 1935. Elles répondent à l’appel des syndicats,
        partis et associations réunis lors des Assises de la paix et de la
        liberté, organisées le même jour à Montrouge. Pour comprendre cette
        mobilisation, des éléments de contexte sont à préciser. Le 6 février
        1934, des émeutes antiparlementaires éclatent suite au licenciement du
        préfet de police Chiappe (proche des groupuscules d’extrême droite comme
        l’Action Française) dans le cadre de l’affaire Stavisky. C’est sous fond
        d’antisémitisme que les émeutiers de droite et d’extrême droite
        manifestent pendant plusieurs jours, provoquant la mort de 30 personnes,
        dont certaines n’ayant aucun lien avec les évènements. Les mois
        suivants, de nombreuses manifestations, tantôt d’extrême droite, tantôt
        des gauches, ont lieu partout en France, et mènent la Gauche à s’unir
        une première fois. autour d’un pacte antifasciste. Ainsi, le 27 juillet
        1935, le Parti Communiste (PC) et la Section Française de
        l’Internationale Ouvrière (SFIO) signent le pacte d’unité antifasciste,
        qui met l'accent sur la lutte contre le fascisme et prévoit
        l'organisation de campagnes et de réunions communes. C’est la genèse du
        Front Populaire, qui se rassemble officiellement l’année suivante.
        L’appel de l’extrême droite à une démonstration de force sur les
        Champs-Élysées le 14 juillet 1935 motive les troupes à organiser un
        évènement de taille. Une cinquantaine d’organisations déferlent alors
        dans les rues de Paris, dont le PC, la SFIO, le parti radical, la
        CGT&nbsp;(socialiste) et la CGTU (communiste), le Comité de vigilance
        des intellectuels antifascistes, la Ligue des Droits de l'Homme, ainsi
        que des associations de jeunesse, de paysans, d'anciens combattants. Le
        serment est clair&nbsp;: «&nbsp;rester unis pour désarmer et dissoudre
        les ligues factieuses, pour défendre et développer les libertés
        démocratiques et pour assurer la paix humaine&nbsp;». Il trouve son écho
        toutes les années suivantes, où le 14 juillet devient, au même titre que
        le 1er mai, le théâtre de défilés populaires, avec la ferme intention de
        ne laisser ni la fête nationale ni la rue à l’extrême droite.
      </Answer>

      <Question>1953&nbsp;: insoutenable 14 juillet</Question>
      <Answer>
        Il est impossible de parler du 14 juillet sans évoquer ce douloureux
        souvenir. Alors que les manifestations antifascistes ont lieu tous les
        ans, 1953 marque la dernière édition. Comme chaque année, la CGT et
        d’autres syndicats appellent au rassemblement durant la fête nationale.
        La foule défile particulièrement cette année là «&nbsp;contre
        l’arbitraire et la répression&nbsp;», dans le contexte tendu des
        réclamations d’indépendance des pays colonisés par la France. Dans le
        cortège, un groupe de militants algériens du Mouvement pour le triomphe
        des libertés démocratiques (MTLD) exige l’arrêt de la répression et du
        racisme que la communauté subit. Des commandos d’extrême droite essaient
        de les bloquer, mais le Service d’Ordre permet le bon déroulement de la
        manifestation. Jusqu’à ce que la France qualifiera d’incidents&nbsp;: la
        police commence à tirer à balles réelles sur les manifestants. Quarante
        seront blessés, et sept, tués&nbsp;: six travailleurs algériens et un
        ouvrier métallurgistes membre de la CGT et du PCF. Ce massacre, qui
        restera dans l’impunité la plus totale, aura des conséquences sur la
        répression&nbsp;: finis, les défilés populaires du 14 juillet, et
        bienvenue, la création de «&nbsp;compagnies d’intervention&nbsp;» qui
        seront à l’origine des lourdes pertes d’octobre 1961 et février 1962.
        L’interdiction de manifester le 14 juillet porte jusqu’en 1968, et
        concerne aussi le 1er mai. Mais jamais le 14 juillet n’a retrouvé ses
        revendications antifascistes, les présidents successifs mettant l’accent
        sur la démonstration des forces militaires, et les maires, sur qui fera
        le plus beau spectacle pyrotechnique. L'histoire du 14 juillet rappelle
        que même si la Révolution appartenait aux progressistes, et que le 14
        juillet antifasciste a existé, les héritiers.ères de la culture
        politique adverse cherchent à s'approprier certains de ses symboles.
        1935 marquera le début des défilés populaires et antifascistes lors de
        la fête nationale, jusqu’à la répression meurtrière de 1953. Depuis, le
        14 juillet a été abandonné aux militaristes et aux nationalistes.
        Devrions-nous nous le réapproprier&nbsp;?
      </Answer>
    </Article>
  );
}

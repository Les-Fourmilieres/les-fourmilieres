import { createFileRoute } from "@tanstack/react-router";
import {
  Answer,
  Article,
  Figure,
  Introduction,
  Question,
  Quote,
  Subtitle,
} from "../Article";

export const Route = createFileRoute(
  "/bataille-culturelle-des-luttes-paysannes",
)({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: `🐜 Les Fourmilières · Bataille culturelle : des luttes paysannes`,
      },
      {
        name: "description",
        content: `Bataille Culturelle : des luttes paysannes`,
      },
      {
        property: "og:title",
        content: `Bataille Culturelle : des luttes paysannes`,
      },
      {
        property: "og:description",
        content: `Bataille Culturelle : des luttes paysannes`,
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content:
          "https://les-fourmilieres.org/bataille-culturelle-des-luttes-paysannes.webp",
      },
    ],
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Article>
      <h1>Bataille Culturelle :</h1>
      <Subtitle>Des luttes paysannes</Subtitle>
      <Figure
        style={{
          backgroundImage: `url('bataille-culturelle-des-luttes-paysannes.webp')`,
        }}
      />
      <Introduction>
        À écouter les discours du Rassemblement national ou de la Coordination
        rurale, on pourrait croire que la défense de l’agriculture est devenue
        un marqueur de l’extrême droite. Les images de Jordan Bardella et de
        Marine Le Pen au Salon de l’agriculture, ou celles de Marion Maréchal
        lors des mobilisations agricoles de 2024, entretiennent cette
        impression, comme leurs discours sur Bruxelles, les normes
        environnementales, les importations ou les accords de libre-échange.
        L’extrême droite se présente volontiers comme la voix d’une France
        rurale abandonnée.
        <br />
        <br />
        Mais cette appropriation politique ne doit pas être confondue avec une
        réponse aux causes de la crise agricole. Si l’extrême droite sait capter
        une colère bien réelle, elle ne remet pas pour autant en cause les
        rapports économiques qui structurent l’agriculture. Concentration des
        exploitations, pression sur le foncier, dépendance aux industriels de
        l’agrochimie et aux fabricants de semences, poids de l’agroalimentaire
        et de la grande distribution, endettement, concurrence internationale :
        ces mécanismes ne disparaissent pas derrière les mots d’ordre
        identitaires ou souverainistes.
      </Introduction>

      <Question>Une histoire politique des campagnes</Question>
      <Answer>
        Il serait pourtant faux de raconter une histoire où les paysans auraient
        toujours été naturellement proches de la gauche et où l’extrême droite
        serait venue récemment les « récupérer ». L’histoire rurale est beaucoup
        plus complexe. Les mobilisations paysannes ont toujours été traversées
        par des sensibilités politiques différentes, parfois contradictoires.
        Elles peuvent être conservatrices, corporatistes ou nationalistes ;
        elles peuvent aussi être syndicales, coopératives, écologistes ou
        révolutionnaires.
        <br />
        <br />
        C’est justement cette histoire qu’il faut se réapproprier.
        <br />
        <br />
        Non pas pour prétendre que « les paysans sont de gauche », mais pour
        rappeler que les revendications agricoles ont longtemps porté sur des
        questions qui sont au cœur du projet d’émancipation sociale : vivre de
        son travail, lutter contre les rapports de domination économique,
        défendre l’accès à la terre, organiser collectivement la production et
        reprendre du pouvoir sur les conditions dans lesquelles on travaille.
        <br />
        <br />
        Deux exemples occitans permettent de bien le comprendre : la grande
        révolte des vignerons de 1907 et la lutte du Larzac.
      </Answer>

      <Question>
        1907 : quand le Midi viticole se soulève, «&nbsp;la révolte des
        gueux&nbsp;»
      </Question>
      <Answer>
        Au début du XXe siècle, le Midi viticole traverse une crise profonde. La
        surproduction, la concurrence des vins importés et les pratiques de
        fraude contribuent à faire chuter les cours. Entre 1891 et 1907, le prix
        de l'hectolitre de vin passe ainsi d'environ 18 à 10 francs. Pour de
        nombreux petits propriétaires, travailler la vigne devient
        économiquement intenable, et les ouvriers agricoles voient leurs
        salaires et leurs conditions de vie se dégrader.
        <br />
        <br />
        Le 11 mars 1907, plusieurs dizaines de vignerons de l’Aude se rendent à
        Narbonne pour porter leurs revendications&nbsp;: la lutte contre la
        fraude et des mesures permettant aux producteurs de vivre de leur
        travail. Parmi eux se trouve Marcelin Albert, petit vigneron et cafetier
        d’Argeliers, qui devient rapidement l’une des principales figures du
        mouvement. Lorsque la mobilisation s’étend à tout le Languedoc et au
        Roussillon, les réunions deviennent des manifestations, puis des
        rassemblements gigantesques : 150 000 personnes à Carcassonne le 26 mai,
        environ 300 000 à Nîmes le 2 juin, et plus de 600 000 à Montpellier le 9
        juin&nbsp;! Cette dernière est la plus importante manifestation de la
        IIIe République, dans une ville, qui comptait alors à peine 80 000
        habitants.
        <br />
        <br />
        Le mouvement se compose alors de propriétaires et d’ouvriers agricoles,
        mais aussi de commerçants et d’une partie de l'économie locale&nbsp;: il
        s’agit de défendre collectivement le Midi viticole. Et c'est là que
        l'histoire devient politiquement intéressante, parce que la révolte de
        1907 n'est pas une mobilisation « de gauche » au sens où nous
        l'entendrions aujourd'hui&nbsp;- elle rassemble des républicains, des
        radicaux, des socialistes, des royalistes, des élus locaux et des
        catégories sociales différentes - en revanche, l’hétérogénéité politique
        du mouvement ne l'empêche pas de produire des revendications
        profondément sociales.
        <br />
        <br />
        Ernest Ferroul, maire socialiste de Narbonne, joue un rôle majeur dans
        la radicalisation du mouvement. À partir de juin, des centaines de
        maires démissionnent symboliquement et une grève de l'impôt est lancée.
        La confrontation avec le gouvernement de Georges Clemenceau se durcit,
        et le 19 juin, Ferroul et plusieurs responsables du mouvement sont
        arrêtés. Les jours suivants, les affrontements à Narbonne font plusieurs
        morts parmi les manifestants après les tirs de l'armée. La crise
        provoque même la mutinerie d'une partie du 17e régiment d'infanterie,
        composé en grande partie de soldats originaires du Midi.
        <br />
        <br />
        Face à la mobilisation, le gouvernement finit par légiférer contre
        certaines pratiques de fraude. Le mouvement débouche également sur la
        création de la Confédération générale des vignerons du Midi, présidée
        par Ernest Ferroul.
        <br />
        <br />
        1907, c'est donc l'histoire d'une colère paysanne capable de devenir une
        force politique considérable lorsqu'elle s'organise autour d'intérêts
        matériels communs. Elle montre aussi qu'une mobilisation rurale peut
        être traversée par des contradictions politiques : certains y voient une
        défense corporatiste de la propriété viticole, d'autres une lutte
        sociale plus large.
        <br />
        <br />
        Autrement dit,{" "}
        <strong>
          une revendication paysanne ne porte pas automatiquement en elle une
          orientation politique
        </strong>
        . Elle devient ce que les forces politiques et sociales qui la portent
        en font. Et c'est précisément pour cela que la gauche ne peut pas se
        contenter de regarder les campagnes avec distance pendant que l'extrême
        droite leur propose une interprétation.
      </Answer>

      <Question>« Faites labour, pas la guerre » : le Larzac</Question>
      <Answer>
        Près de soixante-dix ans plus tard, une autre mobilisation rurale
        occitane devient l'un des symboles internationaux des luttes sociales :
        celle du Larzac. En 1971, le gouvernement annonce l'extension du camp
        militaire du Larzac, près de Millau, de 3 000 à environ 17 000 hectares.
        Une centaine de familles paysannes sont directement menacées par les
        expropriations. Au départ, la contestation est avant tout locale. Mais
        très rapidement, les paysans concernés comprennent qu'ils ne peuvent pas
        gagner individuellement face à l'État et décident de résister
        collectivement.
        <br />
        <br />
        En 1972, les 103 paysans concernés prêtent le fameux « Serment des 103
        », par lequel ils s'engagent à ne pas céder leurs terres sous la
        contrainte. Le mouvement choisit progressivement la désobéissance civile
        et la non-violence comme méthodes d'action. Des marches, des
        manifestations en tracteur, des jeûnes, des occupations et des recours
        juridiques se succèdent pendant dix ans.
        <br />
        <br />
        Mais le Larzac devient surtout autre chose qu'une simple défense de
        propriétés agricoles.
        <br />
        <br />
        À partir de 1973, la lutte reçoit le soutien de mouvements pacifistes,
        antimilitaristes, écologistes, occitanistes, chrétiens progressistes,
        syndicats et organisations politiques. Des dizaines de milliers de
        personnes se rendent sur le plateau. Le slogan « Gardarem lo Larzac »
        devient le symbole d'une lutte qui dépasse largement la seule question
        militaire. « Faites labour, pas la guerre » résume cette articulation :
        défendre la terre agricole, c'est aussi refuser qu'elle soit consacrée à
        la guerre.
        <br />
        <br />
        Surtout, les paysans du Larzac ne se contentent pas de demander à l'État
        de leur laisser leurs terres.Ils inventent de nouvelles manières de les
        contrôler collectivement.
        <br />
        <br />
        Dès 1973, des Groupements fonciers agricoles (GFA) sont créés pour
        acheter collectivement des terres et empêcher leur concentration entre
        les mains de l'armée. En 1981, les quatre GFA du Larzac regroupent
        environ 1 200 hectares. L'objectif n'est plus seulement de défendre la
        propriété individuelle : il s'agit de faire de la maîtrise collective du
        foncier un instrument de lutte.
        <br />
        <br />
        Après la victoire de 1981, cette expérience se poursuit. En 1985 est
        créée la Société civile des terres du Larzac, à laquelle l'État confie
        l'usage des terres sous la forme d'un bail emphytéotique de 99 ans. Les
        fermiers participent à la gestion de cet espace et les terres ne peuvent
        pas être vendues comme une propriété privée ordinaire. Cette expérience
        fait du Larzac un cas particulièrement original de gestion collective du
        foncier agricole.
        <br />
        <br />
        C'est ici que le Larzac devient particulièrement intéressant pour penser
        les luttes agricoles aujourd'hui. Car la lutte ne disait pas seulement :
        « laissez-nous tranquilles », elle interrogeait aussi la propriété des
        terres, leur usage, la production, et plus globalement, le monde dans
        lequel on souhaite vivre.{" "}
      </Answer>

      <Question>Reprendre la question agricole à l'extrême droite</Question>

      <Answer>
        Ces deux histoires ne doivent évidemment pas être utilisées pour
        fabriquer un récit simpliste dans lequel les paysans seraient
        naturellement progressistes. Ce serait refaire, à l'envers, la même
        erreur que l'extrême droite : essentialiser un monde rural supposé
        homogène.
        <br />
        <br />
        Les campagnes ne sont pas un bloc politique. Il y a des petits
        propriétaires et des salariés agricoles, des exploitations familiales et
        des entreprises agricoles, des agriculteurs productivistes et des
        paysans engagés dans l'agroécologie, des électeurs de gauche, de droite,
        d'extrême droite et des personnes éloignées de la politique.
        <br />
        <br />
        Mais cette diversité ne signifie pas que la gauche devrait abandonner le
        terrain agricole.
        <br />
        <br />
        Au contraire.
        <br />
        <br />
        L'histoire du Midi viticole montre qu'une colère paysanne peut se
        transformer en mouvement collectif lorsqu'elle s'attaque aux mécanismes
        économiques qui étranglent les producteurs. L'histoire du Larzac montre
        qu'une lutte pour la terre peut devenir un combat beaucoup plus large
        contre la militarisation, l'accaparement foncier et la dépossession des
        populations de leur territoire.
        <br />
        <br />
        Dans les deux cas, le point de départ n'est pas une identité fantasmée
        du « vrai paysan ». C'est une situation matérielle :{" "}
        <strong>
          pouvoir vivre de son travail et décider de l'avenir de la terre que
          l'on cultive. La crise agricole est d’abord une crise sociale et
          économique. C’est une question de partage des richesses, d’accès à la
          terre, de pouvoir économique et de démocratie.
        </strong>{" "}
        C'est là que se trouve sans doute une réponse de gauche à la
        récupération des luttes agricoles par l'extrême droite.
        <br />
        <br />
        En 1907 dans le Languedoc et le Roussillon, les vignerons se révoltent
        contre l’import massif de vins étrangers. Ils inventent ainsi les codes
        des manifestations agricoles françaises contemporaines : défilés sur la
        voie publique, interpellation des autorités locales et prise de parole
        publique pour porter leurs revendications et rallier la population à
        leur cause.
        <br />
        <br />
        Ruinés par la surproduction et la chute des prix, ces vignerons
        demandent la limitation des importations et la reconnaissance de la
        qualité de leurs productions. Ils créent des comités de défense
        viticoles et organisent des marches de protestation puis des
        rassemblements. Le 9 juin 1907, entre 600 et 800 000 personnes se
        rassemblent à Montpellier. C’est la plus grande manifestation de la IIIe
        République.
        <br />
        <br />
      </Answer>
      <Quote>
        Dans les politiques économiques des années 1880, les préoccupations de
        santé publique sont encore subalternes par rapport aux intérêts fiscaux
        ou commerciaux
      </Quote>
      <Answer>
        En 1911, les vignerons de l’Aube déclenchent un mouvement de
        protestation similaire en reprenant les modes d’action et les slogans de
        leurs confrères. En effet, l’imagerie des révoltes du Midi a beaucoup
        circulé par voie de presse mais aussi par l’édition de cartes postales.
        <br />
        <br />
        Des agriculteurs qui manifestent à cause d’un marché les mettant en
        difficulté face aux autres exportateurs soumis à des règles plus
        légères… comme une impression de déjà-vu.
      </Answer>

      <h3>« Des moutons, pas des canons » : la défense du plateau du Larzac</h3>

      <Answer>
        En 1971, le ministère de la Défense prévoit d’étendre un camp militaire
        situé près de Millau (Aveyron). Une centaine de paysans refusent de
        céder le plateau du Larzac et se rassemblent sous le slogan « Gardarem
        lo Larzac » (Nous garderons le Larzac).
        <br />
        <br />
        En 1973, les mouvements pacifistes et anti-nucléaires rejoignent la
        cause : entre 60 et 100 000 personnes se retrouvent dans le Larzac pour
        soutenir les paysans et former un mouvement hétéroclite qui livrera une
        guerre d’usure aux pouvoirs publics : rassemblements sur le plateau,
        manifestations, marches vers Paris, actions de désobéissance civile.
        <br />
        <br />
        Le Larzac acquière une réputation internationale et en 1981 le président
        François Mitterrand, fidèle à une promesse de campagne, renonce à
        l’expropriation des paysans.
      </Answer>
    </Article>
  );
}

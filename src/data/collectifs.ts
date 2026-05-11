export type Departements = "Aude" | "Aveyron" | "Gard" | "Herault";
export const departements: Departements[] = [
  "Aude",
  "Aveyron",
  "Gard",
  "Herault",
];

export interface CollectifI {
  slug: string;
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  icon?: string;
  position: { lat: number; lng: number };
  instagram?: string;
  facebook?: string;
  departement: Departements;
}

export const collectifs: CollectifI[] = [
  {
    slug: "alternative-de-gauche-millau",
    name: "Alternative de gauche Millau",
    departement: "Aveyron",
    position: {
      lat: 44.092024,
      lng: 3.077545,
    },
  },
  {
    slug: "association-boucan",
    name: "BOUCAN",
    description:
      "Association de lutte contre les violences sexistes et sexuelles, l'inceste et les inégalités de genre.",
    departement: "Gard",
    url: "https://boucan.info/",
    instagram: "https://www.instagram.com/boucan_asso",
    logo: "collectifs/boucan-logo.png",
    position: { lat: 44.124071, lng: 4.083481 },
  },
  {
    slug: "association-folia",
    name: "Association Folia",
    departement: "Herault",
    position: { lat: 43.603889, lng: 3.859463 },
  },
  {
    slug: "association-home-cinema",
    name: "Association Home Cinema",
    departement: "Herault",
    position: { lat: 43.597798, lng: 3.865557 },
  },
  {
    slug: "association-justice-climat-montpellier",
    name: "Association Justice Climat Montpellier",
    departement: "Herault",
    position: { lat: 43.609793, lng: 3.858004 },
  },
  {
    slug: "la-cimade-montpellier",
    name: "La Cimade Montpellier",
    departement: "Herault",
    position: { lat: 43.617682, lng: 3.874231 },
  },
  {
    slug: "association-lafi-bala",
    name: "Association Lafi Bala",
    departement: "Herault",
    position: { lat: 43.630907, lng: 3.898033 },
  },
  {
    slug: "association-refuge-pour-animaux-hakuna-matata",
    name: "Association refuge pour animaux Hakuna Matata",
    departement: "Herault",
    position: { lat: 43.826338, lng: 3.774748 },
  },
  {
    slug: "bar-du-midi",
    name: "Bar du Midi",
    departement: "Gard",
    position: { lat: 43.84052468551134, lng: 4.362547726172306 },
  },
  {
    slug: "barnabu",
    name: "Barnabu",
    departement: "Herault",
    position: { lat: 43.329798, lng: 3.213329 },
  },
  {
    slug: "beziers-anti-cra",
    name: "Béziers ANTI-CRA",
    departement: "Herault",
    position: { lat: 43.34091, lng: 3.197622 },
  },
  {
    slug: "bololipsum",
    name: "Bololipsum",
    departement: "Gard",
    position: { lat: 43.96217265327163, lng: 3.855153297257745 },
  },
  {
    slug: "bouillon-cube",
    name: "Bouillon Cube / La Grange",
    departement: "Herault",
    description:
      "Tiers lieu en milieu rural, avec programmation culturelle, accueil d'artiste en résidence, projet sociaux et éducatif... faire ensemble, en ruralité, est le socle de notre démarche.",
    position: { lat: 43.81539731257116, lng: 3.661956639277761 },
    url: "https://www.bouilloncube.fr",
    instagram: "https://www.instagram.com/bouilloncube.lagrange/",
    facebook: "https://www.facebook.com/bouillon.cube",
    logo: "collectifs/bouillon-cube.webp",
    icon: "collectifs/bouillon-cube.webp",
  },
  {
    slug: "brasserie-la-frenetik",
    name: "Brasserie la Frénétik",
    departement: "Gard",
    description:
      "Fabrique de bières bio disposant d'un lieu permettant d'accueillir des projets artistiques, culturelles et engagés.",
    position: { lat: 44.207081, lng: 4.040238 },
    facebook: "https://www.facebook.com/brasseriefrenetik/",
    logo: "collectifs/la-frenetik.webp",
    icon: "collectifs/la-frenetik.webp",
  },
  {
    slug: "cevennes-terre-d-accueil",
    name: "Cévennes Terre d'Accueil",
    departement: "Gard",
    position: {
      lat: 44.35,
      lng: 3.949327,
    },
  },
  {
    slug: "collectif-gilets-jaunes-de-gignac-et-alentours",
    name: "Collectif Gilets jaunes de Gignac et alentours",
    departement: "Herault",
    position: { lat: 43.65025148001632, lng: 3.546333160764182 },
  },
  {
    slug: "collectif-lodevois",
    name: "Collectif Lodévois",
    departement: "Herault",
    position: { lat: 43.73312, lng: 3.320832 },
  },
  {
    slug: "collectif-montpellier-contre-l-extreme-droite",
    name: "Collectif Montpellier contre l'Extrême Droite",
    departement: "Herault",
    position: { lat: 43.618369, lng: 3.885212 },
  },
  {
    slug: "collectif-sete-contre-l-extreme-droite",
    name: "Collectif Sète lutte contre l'Extrême Droite",
    departement: "Herault",
    position: { lat: 43.409007, lng: 3.698123 },
  },
  {
    slug: "combas-rojas",
    name: "Combas Rojas",
    departement: "Herault",
    position: { lat: 43.661632, lng: 3.342419 },
  },
  {
    slug: "compagnie-le-plus-petit-espace-possible",
    name: "Compagnie Le Plus Petit Espace Possible",
    departement: "Aveyron",
    position: { lat: 44.102749, lng: 3.063812 },
  },
  {
    slug: "cosmopolitheque",
    name: "Cosmopolithèque",
    departement: "Herault",
    position: { lat: 43.339978, lng: 3.216266 },
  },
  {
    slug: "dcclm-club-de-roller-derby",
    name: "DCCLM, club de roller derby",
    departement: "Herault",
    position: { lat: 43.597798, lng: 3.877659 },
  },
  {
    slug: "dear-valid-people",
    name: "Dear Valid People",
    departement: "Herault",
    description:
      "Dear Valid People est une association issue de la loi 1901 ayant pour objet la déconstruction du handicap, du validisme.",
    position: { lat: 43.614267, lng: 3.868561 },
  },
  {
    slug: "en-vie-a-beziers",
    name: "En Vie à Béziers (EVAB)",
    departement: "Herault",
    description:
      "Journal numérique hebdomadaire paru suite à l'élection de R. Ménard à la municipalité en 2014",
    position: { lat: 43.350429, lng: 3.217535 },
    url: "https://www.envieabeziers.info/",
    logo: "collectifs/logo-evab.webp",
  },
  {
    slug: "etoile-bio",
    name: "Étoile bio",
    departement: "Gard",
    position: { lat: 43.909644, lng: 3.998429 },
  },
  {
    slug: "greenpeace-montpellier",
    name: "Greenpeace Montpellier",
    departement: "Herault",
    position: { lat: 43.605528666477845, lng: 3.870980340825212 },
  },
  {
    slug: "inter-syndic-collectif",
    name: "InterSyndicCollectif",
    departement: "Gard",
    position: { lat: 43.989109, lng: 3.602829 },
  },
  {
    slug: "echapppee-belle",
    name: "L'Échappée Belle",
    departement: "Herault",
    position: { lat: 43.401903, lng: 3.695522 },
  },
  {
    slug: "ilot-vert-de-la-soulondres",
    name: "L'Ilot Vert de la Soulondres",
    departement: "Herault",
    position: { lat: 43.730197, lng: 3.313011 },
  },
  {
    slug: "ultra-violette",
    name: "L'Ultra Violette",
    departement: "Herault",
    position: { lat: 43.601838, lng: 3.873196 },
  },
  {
    slug: "la-battante",
    name: "La Battante",
    departement: "Herault",
    description: `La Battante est une batucada militante engagée pour les luttes sociales, environnementales, féministes et LGBTQIA+. 
      Depuis 2010, nous sommes dans la rue pour soutenir les luttes en musique ! `,
    url: "https://batucada-la-battante.org/",
    logo: "collectifs/la-battante.svg",
    icon: "collectifs/la-battante-icone.png",
    position: { lat: 43.608354983899, lng: 3.87930815226476 },
  },
  {
    slug: "la-bestiole",
    name: "La BestiOle",
    departement: "Herault",
    position: { lat: 43.743493, lng: 3.704322 },
  },
  {
    slug: "la-carmagnole",
    name: "La Carmagnole",
    departement: "Herault",
    position: { lat: 43.60735, lng: 3.868065 },
  },
  {
    slug: "la-chaloupe",
    name: "La Chaloupe",
    departement: "Aveyron",
    position: { lat: 44.47473, lng: 2.461218 },
  },
  {
    slug: "la-cimade-beziers",
    name: "La Cimade Beziers",
    departement: "Herault",
    position: { lat: 43.335261, lng: 3.226333 },
  },
  {
    slug: "la-combine",
    name: "La Combine",
    departement: "Gard",
    position: { lat: 44.20943817160611, lng: 4.037457683315754 },
  },
  {
    slug: "la-deter",
    name: "LA DÉTER",
    departement: "Gard",
    position: { lat: 44.209442, lng: 4.029818 },
  },
  {
    slug: "la-mauvaise-reputation",
    name: "La Mauvaise Réputation",
    departement: "Herault",
    position: { lat: 43.609652, lng: 3.873119 },
  },
  {
    slug: "la-retive",
    name: "La rétive",
    departement: "Gard",
    position: { lat: 44.129717, lng: 4.080132 },
  },
  {
    slug: "la-symbolique-du-poulet",
    name: "La symbolique du poulet",
    departement: "Herault",
    position: { lat: 43.607377, lng: 3.871099 },
  },
  {
    slug: "ldh",
    name: "LDH",
    departement: "Herault",
    position: { lat: 43.610352, lng: 3.892164 },
    logo: "collectifs/LDH.png",
    url: "https://www.ldh-france.org/",
  },
  {
    slug: "le-clap",
    name: "Le Clap",
    departement: "Herault",
    position: { lat: 43.730138, lng: 3.323997 },
  },
  {
    slug: "le-grain-des-mots",
    name: "Le Grain des Mots",
    departement: "Herault",
    position: { lat: 43.607925, lng: 3.873901 },
  },
  {
    slug: "le-maquis",
    name: "Le Maquis",
    departement: "Herault",
    position: { lat: 43.730639, lng: 3.318751 },
  },
  {
    slug: "le-poing",
    name: "Le Poing",
    departement: "Herault",
    position: { lat: 43.616505, lng: 3.862295 },
  },
  {
    slug: "le-quartier-genereux",
    name: "Le Quartier Généreux",
    departement: "Herault",
    logo: "collectifs/quartier-genereux-logo.svg",
    icon: "collectifs/quartier-genereux.svg",
    position: {
      lat: 43.61594775505337,
      lng: 3.874829074309236,
    },
    description: `Le Quartier Généreux est votre café-bar associatif et engagé en centre-ville de Montpellier, situé place Albert 1er. Il est résolument tourné vers la ville et le quartier. Il met à l’honneur les initiatives du coin, soutient les associations locales et donne une scène ouverte aux diverses offres culturelles montpelliéraines. `,
    url: "https://quartiergenereux.fr/",
    instagram: "https://www.instagram.com/qg.montpellier/",
    facebook: "https://www.facebook.com/qg.montpellier/",
  },
  {
    slug: "les-aragantes",
    name: "Les aragantes",
    departement: "Herault",
    position: { lat: 43.6143, lng: 3.8717 },
    logo: "collectifs/les-aragantes.webp",
  },
  {
    slug: "les-siestes-mutines",
    name: "Les siestes mutines",
    departement: "Herault",
    description: "Siestes en open air",
    position: { lat: 43.6143, lng: 3.8717 },
  },
  {
    slug: "nouvelle-librairie-setoise",
    name: "Nouvelle Librairie Sétoise",
    departement: "Herault",
    position: { lat: 43.402978, lng: 3.69478 },
  },
  {
    slug: "oustalite",
    name: "Oustalité",
    departement: "Herault",
    position: { lat: 43.736189, lng: 3.317013 },
  },
  {
    slug: "pride-ales-2026",
    name: "Pride Alès 2026",
    departement: "Gard",
    position: { lat: 44.121853, lng: 4.102278 },
  },
  {
    slug: "reso-resistances-solidaires",
    name: "Réso Résistances Solidaires",
    departement: "Herault",
    description:
      "Collectif universitaire de Résistance et Solidarité face aux idées d'extrême droite",
    position: { lat: 43.6313618030923, lng: 3.861349533261347 },
    logo: "collectifs/reso-logo.png",
    icon: "collectifs/reso-icone.png",
  },
  {
    slug: "rusf-34",
    name: "RUSF34",
    departement: "Herault",
    position: { lat: 43.603392, lng: 3.885727 },
  },
  {
    slug: "societe-du-cafe-du-siecle",
    name: "Société du Café du siècle",
    departement: "Herault",
    position: { lat: 43.934128, lng: 3.707733 },
  },
  {
    slug: "terres-de-luttes",
    name: "Terres de luttes",
    departement: "Aveyron",
    position: { lat: 43.919845, lng: 3.26479 },
  },
  {
    slug: "theatre-de-la-plume",
    name: "Théâtre de la Plume",
    departement: "Herault",
    position: { lat: 43.608605, lng: 3.866927 },
  },
  {
    slug: "tisseur-d-espoir",
    name: "Tisseur d'espoir",
    departement: "Herault",
    position: { lat: 43.700272, lng: 3.551846 },
  },
  {
    slug: "union-communiste-libertaire",
    name: "Union Communiste Libertaire (UCL)",
    departement: "Herault",
    position: { lat: 43.609651, lng: 3.873127 },
    description:
      "Nous somme une organisation politique libertaire non-électoraliste. Nous tenons également une librairie anarchiste : la Mauvaise Réputation.",
    logo: "collectifs/ucl-logo.png",
    icon: "collectifs/ucl-logo.png",
    url: "https://montpellier.unioncommunistelibertaire.org/",
    instagram: "https://www.instagram.com/ucl_montpellier",
  },
  {
    slug: "union-syndicale-solidaire-34",
    name: "Union syndicale Solidaires 34",
    departement: "Herault",
    position: { lat: 43.616695, lng: 3.878214 },
  },
  {
    slug: "utopia-montpellier",
    name: "Utopia Montpellier",
    departement: "Herault",
    position: { lat: 43.629019, lng: 3.869085 },
  },
  {
    slug: "vivons-celles",
    name: "Vivons Celles",
    departement: "Herault",
    position: { lat: 43.661942, lng: 3.339329 },
  },
];

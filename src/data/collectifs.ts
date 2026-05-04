export interface CollectifI {
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  position: { lat: number; lng: number };
}

export const collectifs: CollectifI[] = [
  {
    slug: "alternative-de-gauche-millau",
    name: "Alternative de gauche Millau",
    position: {
      lat: 44.092024,
      lng: 3.077545,
    },
  },
  {
    slug: "association-boucan",
    name: "Association Boucan",
    position: { lat: 44.124071, lng: 4.083481 },
  },
  {
    slug: "association-folia",
    name: "Association Folia",
    position: { lat: 43.603889, lng: 3.859463 },
  },
  {
    slug: "association-home-cinema",
    name: "Association Home Cinema",
    position: { lat: 43.597798, lng: 3.865557 },
  },
  {
    slug: "association-justice-climat-montpellier",
    name: "Association Justice Climat Montpellier",
    position: { lat: 43.609793, lng: 3.858004 },
  },
  {
    slug: "association-la-cimade",
    name: "Association La Cimade",
    position: { lat: 43.617682, lng: 3.874231 },
  },
  {
    slug: "association-lafi-bala",
    name: "Association Lafi Bala",
    position: { lat: 43.630907, lng: 3.898033 },
  },
  {
    slug: "association-refuge-pour-animaux-hakuna-matata",
    name: "Association refuge pour animaux Hakuna Matata",
    position: { lat: 43.826338, lng: 3.774748 },
  },
  {
    slug: "barnabu",
    name: "Barnabu",
    position: { lat: 43.329798, lng: 3.213329 },
  },
  {
    slug: "beziers-anti-cra",
    name: "Béziers ANTI-CRA",
    position: { lat: 43.34091, lng: 3.197622 },
  },
  {
    slug: "bouillon-cube",
    name: "Bouillon Cube",
    position: { lat: 43.813856, lng: 3.660372 },
  },
  {
    slug: "brasserie-la-frenetik",
    name: "Brasserie la Frénétik",
    position: { lat: 44.207081, lng: 4.040238 },
  },
  {
    slug: "cevennes-terre-d-accueil",
    name: "Cévennes Terre d'Accueil",
    position: {
      lat: 44.35,
      lng: 3.949327,
    },
  },
  {
    slug: "collectif-lodevois",
    name: "Collectif Lodévois",
    position: { lat: 43.73312, lng: 3.320832 },
  },
  {
    slug: "collectif-montpellier-contre-l-extreme-droite",
    name: "Collectif Montpellier contre l'Extrême Droite",
    position: { lat: 43.618369, lng: 3.885212 },
  },
  {
    slug: "collectif-sete-contre-l-extreme-droite",
    name: "Collectif Sète lutte contre l'Extrême Droite",
    position: { lat: 43.409007, lng: 3.698123 },
  },
  {
    slug: "le-quartier-genereux",
    name: "Le Quartier Généreux",
    icon: "collectifs/quartier-genereux.svg",
    position: {
      lat: 43.61594775505337,
      lng: 3.874829074309236,
    },
    description: `Le Quartier Généreux est votre café-bar associatif et engagé en centre-ville de Montpellier, situé place Albert 1er. Il est résolument tourné vers la ville et le quartier. Il met à l’honneur les initiatives du coin, soutient les associations locales et donne une scène ouverte aux diverses offres culturelles montpelliéraines. `,
  },
];

/*Combas Rojas																
	Compagnie Le Plus Petit Espace Possible																
	Cosmopolithèque																
	DCCLM, club de roller derby																
	Dear Valid People																
	En Vie de Béziers																
	Étoile bio
	InterSyndicCollectif																
	L'Échappée Belle																
	L'Ilot Vert de la Soulondres 																
	L'Ultra Violette																
	La BestiOle
	La Carmagnole
	La Cimade																
	LA DÉTER																
	La Mauvaise Réputation
	La rétive
	La symbolique du poulet
	LDH																
	Le Clap
	Le Grain des Mots
	Le Maquis																
	Le Nouveau Café																
	Le Poing																
	Le Quartier Généreux
	Nouvelle Librairie Sétoise																
	Oustalité																
	Pride Alès 2026																
	Réso Résistances Solidaires																
	RUSF34																
	Société du Café du siècle																
	Terres de luttes																
	Théâtre de la Plume																
	Tisseur d'espoir																
	Union syndicale Solidaires 34
	Utopia Montpellier
	Vivons Celles								*/

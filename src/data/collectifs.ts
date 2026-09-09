export type Departements = "Ardèche" | "Aude" | "Aveyron" | "Gard" | "Hérault" | "Lozère" | "Bouches-du-Rhône";
export type Types = "Café associatif" | "Tiers-lieu" | "Festival" | "Librairie" |
	"Théâtre" | "Syndicat" | "Bar - Brasserie - Commerce" | "Média" | /*"Cinéma" |*/
	"Collectif artistique" | "Collectif événementiel" | "Collectif militant" | "Collectif pour mieux habiter" |
	"Collectif d'accueil de réfugiés" | "Groupement de collectifs" | "Collectif d'éducation populaire"
export const departements: Departements[] = [
	"Ardèche",
	"Aude",
	"Aveyron",
	"Gard",
	"Hérault",
	"Lozère",
	"Bouches-du-Rhône"
];

export interface CollectifI {
	slug: string;
	name: string;
	description?: string;
	url?: string;
	logo?: string;
	icon?: string;
	position?: { lat: number; lng: number };
	bdv?: string; // Position alternative. See values in src/data/bdv.geojson/features[*].properties.bv2022
	instagram?: string;
	facebook?: string;
	bluesky?: string;
	mastodon?: string;
	departement: Departements;
	type:Types[];
}

export type Collectif = "ajcm" |
	"alternatiba-montpellier" |
	"antifanfare" |
	"arret-nucleaire-34" |
	"asso-solidaires-34" |
	"association-acquaforte" |
	"association-boucan" |
	"association-folia" |
	"association-home-cinema" |
	"association-lafi-bala" |
	"association-sous-les-etoiles" |
	"attac-aveyron" |
	"attac-montpellier" |
	"auberge-de-boffres" |
	"bar-du-midi" |
	"barnabu" |
	"beziers-anti-cra" |
	"bienvenue-a-mandagout" |
	"bouillon-cube" |
	"brasserie-la-frenetik" |
	"brasserie-lodeva" |
	"cafe-associatif-de-la-tendresse" |
	"ccfd-herault" |
	"cevennes-terre-d-accueil" |
	"collectif-antifa-millevoix" |
	"collectif-antifacscite-antiraciste-bagnols" |
	"collectif-enfantiste-34" |
	"collectif-faites-des-solidarite" |
	"collectif-ganges-solidarite" |
	"collectif-gilets-jaunes-de-gignac-et-alentours" |
	"collectif-montpellier-contre-l-extreme-droite" |
	"collectif-nimois-antifasciste-queer" |
	"collectif-sete-contre-l-extreme-droite" |
	"combas-rojas" |
	"compagnie-le-plus-petit-espace-possible" |
	"coord-eau-34" |
	"cri-du-choeur" |
	"de-l-autre-cote" |
	"echapppee-belle" |
	"en-vie-a-beziers" |
	"extinction-rebellion-montpellier" |
	"eyeland-festival" |
	"faucheur-euses-d-ogm" |
	"festival-des-luttes-populaires" |
	"fourmiliere-lodevois-larzac" |
	"fsu-34" |
	"greenpeace-montpellier" |
	"greenpeace-narbonne" |
	"groove-your-ass-festival" |
	"ile-des-possibles" |
	"ilot-vert-de-la-soulondres" |
	"l'ancre" |
	"la-base" |
	"la-basse-cour" |
	"la-battante" |
	"la-bestiole" |
	"la-bouscule" |
	"la-caminade" |
	"la-carmagnole" |
	"la-chaloupe" |
	"la-cimade-beziers" |
	"la-cimade-montpellier" |
	"la-combine" |
	"la-deter" |
	"la-freep" |
	"la-mauvaise-reputation" |
	"la-muse-broc" |
	"la-retive" |
	"la-symbolique-du-poulet" |
	"ldh-mondpellier" |
	"le-grain-des-mots" |
	"le-nouveau-cafe" |
	"le-pain-de-la-bouche" |
	"le-poing" |
	"le-quartier-genereux" |
	"le-recif" |
	"les-amis-de-la-terre-le-vigan" |
	"les-ateliers-de-l-espoir" |
	"les-siestes-mutines" |
	"les-soulevements-de-la-terre-nimes" |
	"librairie-alterlivres" |
	"librairie-arbre-sans-fin" |
	"librairie-la-cavale" |
	"librairie-un-point-un-trait" |
	"marche-climat-montpellier" |
	"melando" |
	"mets-ta-peau" |
	"mrap-montpellier" |
	"nous-carcassone" |
	"oai-e-libertat" |
	"oned" |
	"oustalite" |
	"pays-viganais-terre-d-accueil" |
	"planning-familial-sud-cevennes" |
	"poles-en-pomme" |
	"queer-team-arles" |
	"radio-vadrouille" |
	"raices-flamencas" |
	"resf-34" |
	"reso-resistances-solidaires" |
	"rusf-34" |
	"societe-du-cafe-du-siecle" |
	"solidaires-etudiants-34" |
	"solidarite-antispeciste" |
	"streetpress" |
	"sud-education-34" |
	"theatre-beaux-arts-tabards" |
	"theatre-dans-la-foret" |
	"theatre-de-la-plume" |
	"theatre-la-bicyclette" |
	"transmissions" |
	"ul-solidaires-sud-cevennes" |
	"ultra-violette" |
	"union-communiste-libertaire" |
	"union-locale-cgt" |
	"union-syndicale-solidaire-34" |
	"vivons-celles" |
	"volkane";

export const collectifs: Record<Collectif, CollectifI> = {
	"ajcm": {
		slug: "ajcm",
		name: "Action Justice Climat Montpellier",
		position: {lat: 43.60534898256834, lng: 3.8708916243391833},
		departement: "Hérault",
		url: "https://ajcmontpellier.fr/",
		description: "Nous sommes Action Justice Climat et nous luttons depuis 2014 pour un monde juste et soutenable.",
		facebook: "https://www.facebook.com/actionjusticeclimatmontpellier/",
		instagram: "https://www.instagram.com/actionjusticeclimat_mtp",
		logo: "collectifs/ajc-montpellier-logo.png",
		type: ["Collectif militant"]
	},
	"alternatiba-montpellier": {
		slug: "alternatiba-montpellier",
		name: "Alternatiba Montpellier",
		position: {lat: 43.60548235008898, lng: 3.8707762020397642},
		departement: "Hérault",
		facebook: "https://www.facebook.com/p/Alternatiba-Montpellier-61559079741040/",
		url: "https://alternatiba.eu/",
		logo: "collectifs/alternatiba-logo.png",
		description: "Alternatiba est un mouvement citoyen pour le climat et la justice sociale.",
		type: ["Collectif militant"]
	},
	"arret-nucleaire-34": {
		slug: "arret-nucleaire-34",
		name: "Arrêt du nucléaire 34",
		logo: "collectifs/arret-nucleaire-34.jpg",
		url: "https://www.arretdunucleaire34.org/",
		position: {lat: 43.610078, lng: 3.880731},
		type: ["Collectif militant"],
		departement: "Hérault",
		description: "Arrêt du nucléaire 34 a pour but d’agir pour un arrêt définitif du nucléaire civil et militaire.",
		facebook: "https://www.facebook.com/ADNherault/"
	},
	/* "alternative-de-gauche-millau":{
		slug: "alternative-de-gauche-millau",
    name: "Alternative de gauche Millau",
    departement: "Aveyron",
    position: {
      lat: 44.092024,
      lng: 3.077545,
    },
  },*/
	"antifanfare": {
		slug: "antifanfare",
		name: "Antifanfare",
		description: "L'antifanfare ? Une fanfare de lutte montpelliéraine. Nous nous battons pour la protection de l'environnement, les luttes sociales et le soutien des minorités tout en faisant frétiller oreilles. Nous accueillons des musicien.nes de tout niveau et nous inscrivons dans un réseau international de fanfare de lutte.",
		departement: "Hérault",
		type: ["Collectif artistique"],
		position: {lat: 43.61117890020044, lng: 3.8715904645334636},
	},
	"asso-solidaires-34": {
		slug: "asso-solidaires-34",
		name: "ASSO Solidaires 34",
		description: "Travailleurs et travailleuses du secteur associatif dans l’Herault, défendons nos droits ! ASSO est membre de l’Union syndicale Solidaires 34",
		departement: "Hérault",
		type: ["Syndicat"],
		position: {lat: 43.616778098861886, lng: 3.8780380544021984},
		logo: "collectifs/asso-solidaires-34.jpg",
		url: "https://syndicat-asso.fr/",
		instagram: "https://www.instagram.com/asso.solidaires.34/",
	},
	"association-acquaforte": {
		slug: "association-acquaforte",
		name: "Association Acquaforte Théâtre",
		description: "Association franco-argentine créée en 2017. Acquaforte Théâtre est engagée dans le dialogue social et culturel à travers des propositions de théâtre et musique. Nos spectacles s'adressent aussi bien au public adulte qu'au jeune public. Nous croyons en l'art comme moyen de célébrer la diversité culturelle, de susciter la réflexion, de créer des expériences immersives, d'évoquer des questions profondes et de provoquer des émotions. Nos valeurs fondamentales comprennent la créativité, la diversité culturelle, l'authenticité, et la possibilité d'utiliser l'art comme un vecteur de changement social.",
		departement: "Hérault",
		type: ["Collectif artistique"],
		position: {lat: 43.60514740406174, lng: 3.8722629675297457},
		logo: "collectifs/acquaforte.webp",
		url: "https://acquafortetheatre.com",
		instagram: "https://www.instagram.com/acquafortetheatre",
		facebook: "https://www.facebook.com/acquafortetheatre"
	},
	"association-boucan": {
		slug: "association-boucan",
		name: "BOUCAN",
		description:
			"Association de lutte contre les violences sexistes et sexuelles, l'inceste et les inégalités de genre.",
		departement: "Gard",
		url: "https://boucan.info/",
		instagram: "https://www.instagram.com/boucan_asso",
		logo: "collectifs/boucan-logo.png",
		position: {lat: 44.124071, lng: 4.083481},
		type: ["Collectif d'éducation populaire", "Collectif militant"],
	},
	"association-folia": {
		slug: "association-folia",
		name: "Association Folia",
		departement: "Hérault",
		position: {lat: 43.607314809317636, lng: 3.869126672009106},
		url: "https://www.foliaevenement.com/",
		facebook: "https://www.facebook.com/p/Folia-%C3%89v%C3%A9nement-61577107390964/",
		instagram: "https://www.instagram.com/folia.evenement/",
		description: "Folia Événement est une association dédiée à l'art du spectacle et à la création d'événements uniques.",
		logo: "collectifs/folia-logo.png",
		type: ["Théâtre", "Collectif artistique"],
	},
	"association-home-cinema": {
		slug: "association-home-cinema",
		name: "Association Home Cinema",
		departement: "Hérault",
		position: {lat: 43.597798, lng: 3.865557},
		url: "https://assohomecinema.fr/",
		instagram: "https://www.instagram.com/assohomecinema/",
		facebook: "https://www.facebook.com/profile.php?id=61573989620227",
		description: "Collectif à l'origine de l'occupation citoyenne du cinéma La Clef, mais non de son rachat - 🎞️ Ciné-club itinérant - ✏️ Revue Contrebande.",
		logo: "collectifs/home-cinema-logo.png",
		type: ["Collectif militant"/*, "Cinéma"*/],
	},
	"association-sous-les-etoiles": {
		slug: "association-sous-les-etoiles",
		name: "Association Sous les Étoiles",
		departement: "Gard",
		position: {lat: 43.9927991702679, lng: 3.6061338266957472},
		url: "https://souslesetoiles.art",
		facebook: "https://www.facebook.com/asso.souslesetoiles/",
		logo: "collectifs/logo-sous-les-etoiles.png",
		description: "L'asso Sous les étoiles réalise des films amateurs avec habitantes et habitants du Pays Viganais, de 2 à 101 ans, pour créer des liens et construire ensemble.",
		type: ["Collectif artistique"],
	},
	"attac-aveyron": {
		slug: "attac-aveyron",
		name: "ATTAC Aveyron",
		departement: "Aveyron",
		position: {lat: 44.35656963048264, lng: 2.5786055541026065},
		logo: "collectifs/attac-logo.png",
		facebook: "https://www.facebook.com/attac12/",
		type: ["Collectif militant", "Collectif d'éducation populaire"],
		description: "Attac promeut et mène des actions de tous ordres en vue de la reconquête, par les citoyens, du pouvoir que la sphère financière exerce sur tous les aspects de la vie politique, économique, sociale, environnementale et culturelle et ce, au niveau local comme à l’échelle de la planète."
	},
	"attac-montpellier": {
		slug: "attac-montpellier",
		name: "ATTAC Montpellier",
		departement: "Hérault",
		position: {lat: 43.61453796543621, lng: 3.8260602506409764},
		logo: "collectifs/attac-logo.png",
		url: "https://attac-montpellier.ouvaton.org/",
		type: ["Collectif militant", "Collectif d'éducation populaire"],
		description: "Attac promeut et mène des actions de tous ordres en vue de la reconquête, par les citoyens, du pouvoir que la sphère financière exerce sur tous les aspects de la vie politique, économique, sociale, environnementale et culturelle et ce, au niveau local comme à l’échelle de la planète."
	},
	"la-bouscule": {
		slug: "la-bouscule",
		name: "La Bouscule",
		description: "Asso antiraciste décoloniale et intersectionnelle qui existe par et pour les personnes concernées en priorité. Lutte pour un changement de regard sur les personnes minorisées en imaginant des projets mêlant lien social, culture, création artistique et éducation populaire.",
		departement: "Hérault",
		type: ["Collectif militant"],
		logo: "collectifs/la-bouscule.webp",
		url: "https://www.helloasso.com/associations/la-bouscule",
		instagram: "https://www.instagram.com/labouscule",
		bdv: "34172"
	},
	"la-cimade-montpellier": {
		slug: "la-cimade-montpellier",
		name: "La Cimade Montpellier",
		departement: "Hérault",
		position: {lat: 43.617682, lng: 3.874231},
		facebook: "https://www.facebook.com/CimadeMontpellier/",
		url: "https://www.lacimade.org/regions/languedoc-roussillon/",
		description: "La Cimade est une association de solidarité qui défend la dignité et les droits des personnes réfugiées, migrantes et sans-papiers. Elle propose un accompagnement juridique, intervient dans les centres de rétention, les bidonvilles et mène des actions de plaidoyer pour faire évoluer les politiques d'immigration et d'asile.",
		logo: "collectifs/cimade-logo.svg",
		type: ["Collectif militant"],
	},
	"association-lafi-bala": {
		slug: "association-lafi-bala",
		name: "Association Lafi Bala",
		departement: "Hérault",
		position: {lat: 43.630907, lng: 3.898033},
		url: "https://www.lafibala.org/",
		instagram: "https://www.instagram.com/associationlafibala/",
		facebook: "https://fr-fr.facebook.com/lafibala34",
		description: "Association d'éducation à la citoyenneté mondiale",
		logo: "collectifs/lafibala-logo.png",
		type: ["Collectif d'éducation populaire", "Collectif militant"],
	},
	/* "association-refuge-pour-animaux-hakuna-matata":{
		slug: "association-refuge-pour-animaux-hakuna-matata",
		name: "Association refuge pour animaux Hakuna Matata",
		departement: "Hérault",
		position: { lat: 43.826338, lng: 3.774748 },
	},*/
	"auberge-de-boffres": {
		slug: "auberge-de-boffres",
		name: "Auberge de Boffres",
		departement: "Ardèche",
		type: ["Bar - Brasserie - Commerce"],
		position: {lat: 44.92023513798938, lng: 4.702049254789491},
		description: "Restaurant café bar épicerie de village, gîtes et événements festifs et militants. En SCOP autogérée",
		url: "http://aubergedeboffres.fr/",
		logo: "collectifs/auberge-boffres.png",
		facebook: "https://www.facebook.com/AubergedeBoffres",
		instagram: "https://www.instagram.com/aubergedeboffres/"
	},
	"bar-du-midi": {
		slug: "bar-du-midi",
		name: "Bar du Midi",
		departement: "Gard",
		position: {lat: 43.84052468551134, lng: 4.362547726172306},
		instagram: "https://www.instagram.com/le_bar_du_midi/",
		facebook: "https://www.facebook.com/p/Le-Bar-du-Midi-100088602878744/",
		logo: "collectifs/bar-du-midi-logo.jpg",
		description: "Le Bar du Midi, c’est un Bar-PMU et lieu culturel revisité. Dans un esprit rétro et chaleureux.",
		type: ["Bar - Brasserie - Commerce"],
	},
	"barnabu": {
		slug: "barnabu",
		name: "Barnabu - Collectif Nabuchodonosor",
		departement: "Hérault",
		position: {lat: 43.329798, lng: 3.213329},
		facebook: "https://www.facebook.com/collectif.nabucho/?locale=fr_FR",
		description: "Collectif Nabuchodonosor, Venez nous retrouver au Café associatif Barnabu, place St Cyr à Béziers",
		logo: "collectifs/barnabu-logo.jpg",
		type: ["Café associatif"],
	},
	"beziers-anti-cra": {
		slug: "beziers-anti-cra",
		name: "Béziers ANTI-CRA",
		departement: "Hérault",
		position: {lat: 43.34091, lng: 3.197622},
		url: "https://anticra.com/",
		type: ["Collectif militant"],
	},
	"bienvenue-a-mandagout": {
		slug: "bienvenue-a-mandagout",
		name: "Bienvenu à Mandagout - BAM",
		departement: "Gard",
		position: {lat: 44.02035067734695, lng: 3.6257197344016316},
		description: "BAM est une association créée pour gérer l’accueil et l’accompagnement de familles de réfugiés.",
		type: ["Collectif d'accueil de réfugiés"],
	},
	"bouillon-cube": {
		slug: "bouillon-cube",
		name: "Bouillon Cube / La Grange",
		departement: "Hérault",
		description:
			"Tiers lieu en milieu rural, avec programmation culturelle, accueil d'artiste en résidence, projet sociaux et éducatif... faire ensemble, en ruralité, est le socle de notre démarche.",
		position: {lat: 43.81539731257116, lng: 3.661956639277761},
		url: "https://www.bouilloncube.fr",
		instagram: "https://www.instagram.com/bouilloncube.lagrange/",
		facebook: "https://www.facebook.com/bouillon.cube",
		logo: "collectifs/bouillon-cube.webp",
		type: ["Tiers-lieu", "Collectif événementiel"],
	},
	"brasserie-la-frenetik": {
		slug: "brasserie-la-frenetik",
		name: "Brasserie la Frénétik",
		departement: "Gard",
		description:
			"Fabrique de bières bio disposant d'un lieu permettant d'accueillir des projets artistiques, culturelles et engagés.",
		position: {lat: 44.207081, lng: 4.040238},
		facebook: "https://www.facebook.com/brasseriefrenetik/",
		logo: "collectifs/la-frenetik.webp",
		type: ["Bar - Brasserie - Commerce"],
	},
	"brasserie-lodeva": {
		slug: "brasserie-lodeva",
		name: "Brasserie Lodeva",
		position: {lat: 43.7302547901774, lng: 3.324012238492436},
		departement: "Hérault",
		facebook: "https://www.facebook.com/brasserielodeva/?locale=fr_FR",
		instagram: "https://www.instagram.com/brasserielodeva",
		logo: "collectifs/brasserie-lodeva-logo.png",
		description: "Brasserie artisanale, 🍲 Cuisine bistrot, 🎸 Événements culturels, concerts",
		type: ["Bar - Brasserie - Commerce"],
	},
	"cafe-associatif-de-la-tendresse": {
		slug: "cafe-associatif-de-la-tendresse",
		name: "Café Associatif de La Tendresse",
		description: "Diffusion et organisation d'évènement au sein de La Tendresse, coopérative culturelle et d'expérimentation sociale",
		departement: "Hérault",
		type: ["Café associatif", "Tiers-lieu"],
		position: {lat: 43.585877889183216, lng: 3.852877289409865},
		logo: "collectifs/la-tendresse.webp",
		url: "https://www.latendresse.fr",
		instagram: "https://www.instagram.com/latendressemontpellier",
		facebook: "https://www.facebook.com/latendressemontpellier",
		mastodon: "https://mastodon.social/@laTendresse@social.bim.land"


	},
	"ccfd-herault": {
		slug: "ccfd-herault",
		name: "CCFD-Terre Solidaire Hérault",
		position: {lat: 43.623233767371836, lng: 3.888137511144614},
		departement: "Hérault",
		facebook: "https://www.facebook.com/people/CCFD-Terre-Solidaire-H%C3%A9rault/100064861953900/?locale=fr_FR",
		url: "https://ccfd-terresolidaire.org/regions/languedoc-roussillon-vaucluse/",
		instagram: "https://www.instagram.com/ccfdts_lrv/",
		logo: "collectifs/ccfd-terre-solidaire.png",
		description: "Le CCFD-Terre Solidaire agit aux côtés des populations les plus vulnérables contre toutes les formes d’injustices, et en premier lieu, celle de souffrir de la faim.",
		type: ["Collectif militant"]
	},
	"coord-eau-34": {
		slug: "coord-eau-34",
		name: "Coord'eau 34",
		position: {lat: 43.61354427304223, lng: 3.895045113387284},
		departement: "Hérault",
		logo: "collectifs/coordeau34.png",
		facebook: "https://www.facebook.com/p/Coordeau-34-100094200818050/",
		instagram: "https://www.instagram.com/coordeau34/",
		description: "Coordination départementale « EAU » à l’échelle de l’Hérault. La gestion de l'eau, notre bien commun, impose des choix collectifs et partagés.",
		type: ["Groupement de collectifs", "Collectif militant"],
	},
	"cevennes-terre-d-accueil": {
		slug: "cevennes-terre-d-accueil",
		name: "Cévennes Terre d'Accueil",
		departement: "Gard",
		position: {
			lat: 44.35,
			lng: 3.949327,
		},
		logo: "collectifs/logo-cevennes-terre-accueil.png",
		url: "https://www.helloasso.com/associations/cevennes-terre-d-accueil",
		description: "Association de soutien à l'accueil de réfugiés sur le territoire des Cévennes : Ardèche, Gard et Lozère",
		type: ["Collectif d'accueil de réfugiés"],
	},
	"collectif-antifacscite-antiraciste-bagnols": {
		slug: "collectif-antifacscite-antiraciste-bagnols",
		name: "Collectif antifasciste et antiraciste Bagnols",
		description: "collectif de lutte contre le fascisme et le racisme",
		departement: "Gard",
		type: ["Collectif militant"],
		position: {lat: 44.15951984268168, lng: 4.621582675150231},
		instagram: "https://www.instagram.com/bagnolsantifa",
		logo: "collectifs/collectif-bagnols-antifa.webp"
	},
	"collectif-antifa-millevoix": {
		slug: "collectif-antifa-millevoix",
		name: "Collectif Antifa MillaVoix",
		description: "Collectif de lutte Antiraciste et Antifa de Millau",
		departement: "Aveyron",
		type: ["Collectif militant"],
		bdv: "12145",
		logo: "collectifs/millavoix.webp"
	},
	"collectif-ganges-solidarite": {
		slug: "collectif-ganges-solidarite",
		name: "Collectif Ganges Solidarité",
		departement: "Hérault",
		position: {lat: 43.934290, lng: 3.707644},
		type: ["Collectif d'accueil de réfugiés", "Collectif militant"],
		logo: "collectifs/collectif-ganges-solidarite.png",
		url: "https://collectifgangessolidarites.wordpress.com",
		description: "L'association Collectif Ganges Solidarités a pour objet la solidarité avec les personnes migrantes et plus largement avec toutes les personnes confrontées à des difficultés portant atteinte à leur dignité, en leur apportant aide et accompagnement pour une vie décente.",
	},
	"collectif-enfantiste-34": {
		slug: "collectif-enfantiste-34",
		name: "Collectif Enfantiste 34",
		bdv: "34172",
		//position:{lat:43.60936561856381, lng:3.8811744681101414},
		departement: "Hérault",
		instagram: "https://www.instagram.com/collectifenfantiste34/",
		description: "Collectif d’activistes contre les violences faites aux enfants et adolescents",
		url: "https://collectifenfantiste.fr/",
		logo: "collectifs/collectif-enfantiste-logo.webp",
		type: ["Collectif militant"]
	},
	"collectif-faites-des-solidarite": {
		slug: "collectif-faites-des-solidarite",
		name: "Collectif Faites des Solidarités",
		position: {lat: 43.989109, lng: 3.602829},
		departement: "Gard",
		description: "Le collectif Faites des solidarités s'est créé suite à l'appel du quartier généreux de mars 2026. Il est composé d'habitantes et habitants du Pays Viganais, d'associations, de collectifs et de syndicats. Ensemble nous souhaitons mener des projets sur le long terme, uni•es par nos engagements aussi multiples et différents soient ils. Nous participons au festival des Fourmilières, que nous avons co-construit avec les habitantes et habitants du quartier des Arennes, comme un point d'étape sur le long chemin de nos actions antifascistes et solidaires. Les structures participant à la faites des solidarités, début septembre 2026, sont : Les amis de la terre, Le Collectif Pays Viganais Terre d’Accueil, Le planning familial Sud Cévennes, Le pain d’la bouche, L'Union Locale CGT Le Vigan, Bienvenue A Mandagoût, l'association Sous les étoiles, la cantine de l’Etuve.",
		type: ["Groupement de collectifs"]
	},
	"collectif-gilets-jaunes-de-gignac-et-alentours": {
		slug: "collectif-gilets-jaunes-de-gignac-et-alentours",
		name: "Collectif Gilets jaunes de Gignac et alentours",
		departement: "Hérault",
		position: {lat: 43.65025148001632, lng: 3.546333160764182},
		type: ["Collectif militant"],
	},
	/* "collectif-lodevois":{
		slug: "collectif-lodevois",
		name: "Collectif Lodévois",
		departement: "Hérault",
		position: { lat: 43.73312, lng: 3.320832 },
		type:["Collectif militant"],
	},*/
	"collectif-nimois-antifasciste-queer": {
		slug: "collectif-nimois-antifasciste-queer",
		name: "Collectif Nimois Antifasciste et Queer (CNAQ)",
		departement: "Gard",
		bdv: "30189",
		type: ["Collectif militant"],
		logo: "collectifs/cnaq-logo.png",
		url: "https://sites.google.com/view/collectif-cnaq/cnaqnimes",
		instagram: "https://www.instagram.com/cnaq_nimes/",
		facebook: "https://www.facebook.com/people/CNAQ-N%C3%AEmes/61577679513715/",
		description: "Nous menons une lutte qui croise les combats trans et queer, antifascistes, antiracistes et anti-impérialistes dans le Sud de la France, en lien avec d’autres organisations et collectifs du territoire."
	},
	"collectif-montpellier-contre-l-extreme-droite": {
		slug: "collectif-montpellier-contre-l-extreme-droite",
		name: "Collectif Montpellier contre l'Extrême Droite",
		departement: "Hérault",
		position: {lat: 43.618369, lng: 3.885212},
		logo: "collectifs/montpellier-contre-extreme-droite-logo.jpg",
		instagram: "https://www.instagram.com/mtpcontrelexd/",
		description: "Collectif d’individu-e-s, assos, orgas, syndicats. Contre les idées d’extrême droite, organise-toi 💥",
		type: ["Collectif militant"],
	},
	"collectif-sete-contre-l-extreme-droite": {
		slug: "collectif-sete-contre-l-extreme-droite",
		name: "Collectif Sète lutte contre l'Extrême Droite",
		departement: "Hérault",
		position: {lat: 43.409007, lng: 3.698123},
		type: ["Collectif militant"],
	},
	"combas-rojas": {
		slug: "combas-rojas",
		name: "Combas Rojas",
		departement: "Hérault",
		position: {lat: 43.661632, lng: 3.342419},
		url: "https://www.cambasrojas.org/",
		description: "Le Fonds de dotation Cambas Rojas agit pour que le village de Celles redevienne un lieu habité, vivant et partagé.",
		logo: "collectifs/combas-rojas-celles-logo.png",
		type: ["Collectif pour mieux habiter"],
	},
	"compagnie-le-plus-petit-espace-possible": {
		slug: "compagnie-le-plus-petit-espace-possible",
		name: "Compagnie Le Plus Petit Espace Possible",
		departement: "Aveyron",
		position: {lat: 44.102749, lng: 3.063812},
		url: "https://lepluspetitespacepossible.com/",
		logo: "collectifs/logo-plus-petit-espace-possible.png",
		facebook: "https://www.facebook.com/compagnielarzac",
		instagram: "https://www.instagram.com/lepluspetitespacepossible",
		type: ["Collectif artistique"],
	},
	/* "cosmopolitheque":{
		slug: "cosmopolitheque",
		name: "Cosmopolithèque",
		departement: "Hérault",
		position: { lat: 43.339978, lng: 3.216266 },
		description:"Lieu associatif, culturel et citoyen",
		url:"https://www.cosmopolitheque.fr/",
		facebook:"https://www.facebook.com/cosmopolitheque",
		type:["Tiers-lieu"]
	},*/
	/* "dcclm-club-de-roller-derby":{
		slug: "dcclm-club-de-roller-derby",
		name: "DCCLM, club de roller derby",
		description: "Club de roller derby à Montpellier",
		departement: "Hérault",
		position: { lat: 43.597798, lng: 3.877659 },
		logo: "collectifs/dcclm.webp",
		url: "https://dcclm-roller-derby.fr/",
		instagram: "https://www.instagram.com/dcclm34/",
		facebook: "https://www.facebook.com/dcclm.rollerderby",
	},*/
	"cri-du-choeur": {
		slug: "cri-du-choeur",
		name: "Cri du Choeur",
		description: "Le Cri du Chœur, chorale militante, c'est une volonté commune : retrouver une voix confisquée par un système inhumain en partageant des chants de lutte. L'action collective et le ''faire ensemble'' sont non seulement souhaitables mais nécessaires : s'épanouir dans le plaisir de chanter ensemble.",
		departement: "Hérault",
		type: ["Collectif artistique", "Collectif militant"],
		position: {lat: 43.60587262955087, lng: 3.86281496797415},
		logo: "collectifs/cri-du-choeur.png",
		url: "https://criduchoeur.jimdofree.com/"
	},
	"de-l-autre-cote": {
		slug: "de-l-autre-cote",
		name: "De l’Autre Côté",
		position: {lat: 43.934328020447076, lng: 3.7078137288933743},
		departement: "Hérault",
		url: "https://delautrecote-ganges.weebly.com/",
		description: "Espace culturel, citoyen & solidaire",
		facebook: "https://www.facebook.com/delautrecoteganges/",
		logo: "collectifs/de-lautre-cote-logo.png",
		type: ["Tiers-lieu"],
	},
	/* "dear-valid-people":{
		slug: "dear-valid-people",
		name: "Dear Valid People",
		departement: "Hérault",
		description:
			"Dear Valid People est une association issue de la loi 1901 ayant pour objet la déconstruction du handicap, du validisme.",
		position: { lat: 43.614267, lng: 3.868561 },
		instagram:"https://www.instagram.com/dear.valid.people/",
		facebook:"https://www.facebook.com/dearvalidpeople/",
		logo:"collectifs/dear-valid-people-logo.webp",
		type:["Collectif militant"],
	},*/
	"en-vie-a-beziers": {
		slug: "en-vie-a-beziers",
		name: "En Vie à Béziers (EVAB)",
		departement: "Hérault",
		description:
			"Journal numérique hebdomadaire paru suite à l'élection de R. Ménard à la municipalité en 2014",
		position: {lat: 43.350429, lng: 3.217535},
		url: "https://www.envieabeziers.info/",
		logo: "collectifs/logo-evab.webp",
		type: ["Collectif militant"],
	},
	/* "etoile-bio":{
		slug: "etoile-bio",
		name: "Étoile bio",
		departement: "Gard",
		position: { lat: 43.909644, lng: 3.998429 },
		facebook: "https://www.facebook.com/etoilebioquissac/",
		instagram: "https://www.instagram.com/letoile.bio/",
		logo: "collectifs/etoile-bio-logo.jpg",
		type:["Bar - Brasserie - Commerce"]
	},*/
	"extinction-rebellion-montpellier": {
		slug: "extinction-rebellion-montpellier",
		name: "Extinction Rebellion Montpellier",
		position: {lat: 43.60537155400486, lng: 3.8711312035552408},
		departement: "Hérault",
		logo: "collectifs/extinction-rebellion-icon.png",
		instagram: "https://www.instagram.com/xr.montpellier/",
		url: "https://extinctionrebellion.fr/branches/montpellier/",
		facebook: "https://www.facebook.com/xrmontpellier/",
		description: "Extinction Rebellion est un mouvement mondial de désobéissance civile en lutte contre l’effondrement écologique et le réchauffement climatique",
		type: ["Collectif militant"],
	},
	"eyeland-festival": {
		slug: "eyeland-festival",
		name: "Eyeland Festival",
		description: "SoundSystem Culture Festival entre Musique/Installation immersive et vivre ensemble",
		departement: "Hérault",
		type: ["Collectif artistique", "Festival"],
		bdv: "34172",
		logo: "collectifs/eyland-festival.jpg",
		url: "https://festival.eyelanduniverse.com",
		instagram: "https://www.instagram.com/eyeland_festival_poh",
		facebook: "https://www.facebook.com/EyelandFestivalpoh"
	},
	"greenpeace-montpellier": {
		slug: "greenpeace-montpellier",
		name: "Greenpeace Montpellier",
		departement: "Hérault",
		description:
			"Le groupe local de Greenpeace Montpellier œuvre selon les principes de non-violence pour protéger l'environnement, la biodiversité et promouvoir la paix.",
		position: {lat: 43.605528666477845, lng: 3.870980340825212},
		url: "https://www.greenpeace.fr/",
		logo: "collectifs/greenpeace-logo.webp",
		instagram: "https://www.instagram.com/greenpeace.montpellier/",
		facebook:
			"https://www.facebook.com/GreenpeaceFranceMontpellier/?locale=fr_FR",
		bluesky: "https://bsky.app/profile/greenpeace-mtpl.bsky.social",
		type: ["Collectif militant"]
	},
	"greenpeace-narbonne": {
		slug: "greenpeace-narbonne",
		name: "Greenpeace Narbonne",
		departement: "Aude",
		position: {lat: 43.184264449880324, lng: 3.0028803327703963},
		url: "https://www.greenpeace.fr/",
		logo: "collectifs/greenpeace-vert-logo.svg",
		instagram: "https://www.instagram.com/greenpeacenarbonne/",
		facebook:
			"https://www.facebook.com/GreenpeaceNarbonne/",
		bluesky: "https://bsky.app/profile/gp-narbonne.bsky.social",
		type: ["Collectif militant"]
	},
	"groove-your-ass-festival": {
		slug: "groove-your-ass-festival",
		name: "Groove Your Ass Festival",
		position: {lat: 43.59738719604566, lng: 3.8593058064980093},
		departement: "Hérault",
		instagram: "https://www.instagram.com/groove.your.ass/",
		description: "Groove Your Ass : Un festival anticapitaliste, écologiste et culturel",
		url: "https://shotgun.live/fr/venues/groove-your-ass",
		logo: "collectifs/groove-your-ass-logo.png",
		type: ["Festival", "Collectif événementiel"],
	},
	"festival-des-luttes-populaires": {
		slug: "festival-des-luttes-populaires",
		name: "Festival des luttes populaires",
		departement: "Aude",
		position: {lat: 43.185814, lng: 3.064775},
		type: ["Festival"],
		url: "https://olivettedelangel.fr/festival/",
		description: "Le festival des luttes populaires accueilli à Langel est organisé par le collectif Mutvitz11 qui distribue du café zapatiste en provenance directe de coopératives du Chiapas au Mexique."
	},
	"echapppee-belle": {
		slug: "echapppee-belle",
		name: "Librairie l'Échappée Belle",
		departement: "Hérault",
		position: {lat: 43.401903, lng: 3.695522},
		url: "https://www.lechappeebelle.fr/",
		logo: "collectifs/echapee-belle-logo.png",
		facebook: "https://www.facebook.com/libechappeebelle/",
		instagram: "https://www.instagram.com/librairie.lechappee.belle/",
		type: ["Librairie"]
	},
	"faucheur-euses-d-ogm": {
		slug: "faucheur-euses-d-ogm",
		name: "Faucheur.euses d’OGM",
		type: ["Collectif militant"],
		departement: "Aveyron",
		position: {lat: 44.35159496692586, lng: 2.568232162650412},
		description: "Les faucheurs volontaires est un mouvement essentiellement français (mais des actions similaires ont eu lieu en 2007 en Allemagne, au Portugal et en Grande-Bretagne), proche des courants anti-industriels, dont les 6 700 militants revendiqués se sont engagés par écrit à détruire les parcelles d'essai transgéniques et de cultures d'OGM en plein champ.",
		facebook: "https://www.facebook.com/groups/faucheursvolontaires/?locale=fr_FR",
		url: "https://www.faucheurs-volontaires.fr/",
		logo: "collectifs/faucheureuses-ogm.png",
	},
	"fsu-34": {
		slug: "fsu-34",
		name: "Fédération Syndicale Unitaire - FSU 34",
		position: {lat: 43.60951340566071, lng: 3.888753916038166},
		departement: "Hérault",
		url: "https://fsu34.fsu.fr/",
		facebook: "https://www.facebook.com/FederationSyndicaleUnitaire/",
		instagram: "https://www.instagram.com/federationsyndicaleunitaire/?hl=fr",
		logo: "collectifs/fsu-logo.png",
		type: ["Syndicat"],
	},
	/*"fsu-territoriale-34":{
		slug:"fsu-territoriale-34",
		name:"FSU Territoriale de l'Hérault",
		position:{lat:43.60952455442817, lng:3.8886228070287983},
		departement:"Hérault",
		logo:"collectifs/snuter-herault-logo.png",
		url:"https://www.snuter34fsu.fr/",
		description: "Syndicat National Untaire des Territoriaux de l'Hérault.",
		type:["Syndicat"],
	},*/
	"ile-des-possibles": {
		slug: "ile-des-possibles",
		name: "L'Île des possibles",
		logo: "collectifs/ile-des-possibles.webp",
		position: {lat: 43.599381999323924, lng: 3.8666944412998236},
		departement: "Hérault",
		type: ["Collectif d'éducation populaire"],
		instagram: "https://www.instagram.com/iledespossibles.montpellier/?hl=fr",
		facebook: "https://www.facebook.com/p/L%C3%8Ele-des-Possibles-100065086740540/",
		url: "https://www.communauteopenlande.org/communaute-open-lande-occitanie/",
		description: "L’association L’Île des Possibles, créée en 2022, favorise la sensibilisation citoyenne, l’économie régénérative et expérimente différentes formes de participations et d’engagements dans les domaines écologiques, culturels et sociaux."
	},
	"ilot-vert-de-la-soulondres": {
		slug: "ilot-vert-de-la-soulondres",
		name: "L'Ilot Vert de la Soulondres",
		description:
			"Eco-lieu. Coopérative d'habitants de 22 logements dont un logement d'accueil solidaire",
		departement: "Hérault",
		position: {lat: 43.731969753153166, lng: 3.309223902200748},
		url: "https://ilotvertdelasoulondres.org/",
		type: ["Collectif pour mieux habiter"]
	},
	"ul-solidaires-sud-cevennes": {
		slug: "ul-solidaires-sud-cevennes",
		name: "UL Solidaires Sud Cévennes",
		type: ["Syndicat"],
		departement: "Hérault",
		position: {lat: 43.935509, lng: 3.708808},
		url: "https://solidaires34.org/author/ul_sudcevennes/",
		facebook: "https://www.facebook.com/people/UL-Solidaires-SUD-C%C3%A9vennes/100092669360092/",
		description: "Union locale interprofessionnelle des syndicats SUD autour de Ganges et Le Vigan",
		logo: "collectifs/logo-ul-solidaires-cevennes.png",
	},
	"ultra-violette": {
		slug: "ultra-violette",
		name: "L'Ultra Violette",
		departement: "Hérault",
		position: {lat: 43.601838, lng: 3.873196},
		facebook: "https://www.facebook.com/lultraviolette/?locale=fr_FR",
		instagram: "https://www.instagram.com/l.ultraviolette/",
		description: "Bar associatif queer et féministe itinérant 🏳️‍🌈",
		logo: "collectifs/ultraviolette-logo.jpg",
		type: ["Café associatif"]
	},
	"l'ancre": {
		slug: "l'ancre",
		name: "L'ancre",
		position: {lat: 43.4055113765286, lng: 3.691182797054215},
		departement: "Hérault",
		description: "L’Ancre, journal sympathique. Cette Ancre sétoise est écologiste, de gauche, féministe, citoyenne et culturelle.",
		logo: "collectifs/logo-ancre.png",
		url: "https://lancredesete.fr/",
		facebook: "https://www.facebook.com/Lancredesete/?locale=fr_FR",
		type: ["Média"]
	},
	"la-basse-cour": {
		slug: "la-basse-cour",
		name: "Collectif la Basse Cour",
		position: {lat: 43.841643, lng: 4.362973},
		departement: "Gard",
		type: ["Festival", "Collectif artistique"],
		logo: "collectifs/basse-cour.png",
		description: "Collectif de compagnie qui mutualise des moyens humains, financiers et techniques. Celui-ci organise le festival Nuits Occupées qui propose une programmation spectaculaire en espace public et a pour objet la réappropriation de l'espace public par les corps sexisés.",
		url: "https://labassecour.com/",
		facebook: "https://www.facebook.com/CollectifLaBasseCour/",
		instagram: "https://www.instagram.com/collectif.lbc/?hl=fr"
	},
	"la-base": {
		slug: "la-base",
		name: "La Base",
		position: {lat: 43.605409688178625, lng: 3.871013688279682},
		departement: "Hérault",
		description: "La Base (Base d’Action Sociale et Écologique) de Montpellier est un lieu d’engagement citoyen en faveur de la justice sociale, du climat et du vivant, convivial et ouvert à toutes et tous.",
		instagram: "https://www.instagram.com/labase.montpellier/",
		facebook: "https://www.facebook.com/LaBase.montpellier",
		url: "https://labasemontpellier.org/",
		logo: "collectifs/la-base-logo.webp",
		type: ["Café associatif"]
	},
	"la-battante": {
		slug: "la-battante",
		name: "La Battante",
		departement: "Hérault",
		description: `La Battante est une batucada militante engagée pour les luttes sociales, environnementales, féministes et LGBTQIA+. 
      Depuis 2010, nous sommes dans la rue pour soutenir les luttes en musique ! `,
		url: "https://batucada-la-battante.org/",
		logo: "collectifs/la-battante.svg",
		position: {lat: 43.608354983899, lng: 3.87930815226476},
		type: ["Collectif artistique", "Collectif militant"]
	},
	"la-bestiole": {
		slug: "la-bestiole",
		name: "Librairie la BestiOle",
		departement: "Hérault",
		position: {lat: 43.743493, lng: 3.704322},
		logo: "collectifs/logo-la-bestiole.jpg",
		facebook: "https://www.facebook.com/violslefort34/?locale=fr_FR",
		type: ["Librairie"]
	},
	"la-caminade": {
		slug: "la-caminade",
		name: "La Caminade",
		departement: "Hérault",
		position: {lat: 43.73250572349244, lng: 3.3253180682321335},
		type: ["Collectif pour mieux habiter"],
		logo: "collectifs/caminade-logo.png",
		facebook: "https://www.facebook.com/people/La-Caminade-Lod%C3%A8ve/100089633520518/",
		description: "Coopérative d'habitants écologique, sociale et intergénérationnelle issue de l'asso. Maisons Ecoé.",
		url: "https://maisons-ecoe.org/la-caminade-lodeve/"
	},
	"la-carmagnole": {
		slug: "la-carmagnole",
		name: "La Carmagnole",
		description: `La Carmagnole est une coopérative d’émancipation politique, de solidarités et de cultures indépendant et pluraliste. Un point d’appui pour les luttes sociales, écologistes, féministes, antiracistes et démocratiques, un lieu de diffusion et de création culturelle.`,
		departement: "Hérault",
		position: {lat: 43.60735, lng: 3.868065},
		url: "https://lacarmagnole.fr/",
		instagram: "https://www.instagram.com/la_carmagnole.mtp/",
		facebook: "https://www.facebook.com/lacarmagnole",
		logo: "collectifs/carmagnole.webp",
		type: ["Tiers-lieu"]
	},
	"la-chaloupe": {
		slug: "la-chaloupe",
		name: "La Chaloupe",
		departement: "Aveyron",
		position: {lat: 44.47473, lng: 2.461218},
		url: "https://www.lachaloupe.org/",
		logo: "collectifs/logo-chaloupe.png",
		type: ["Tiers-lieu", "Café associatif"],
		description: "Depuis plus de deux ans, nous sommes un lieu associatif en plein cœur de Marcillac-Vallon, offrant un potentiel à la hauteur de nos ambitions et contribuant à dynamiser la vie du village et de ses environs."
	},
	"la-cimade-beziers": {
		slug: "la-cimade-beziers",
		name: "La Cimade Beziers",
		departement: "Hérault",
		position: {lat: 43.335261, lng: 3.226333},
		facebook: "https://www.facebook.com/laCimadebeziers/",
		url: "https://www.lacimade.org/nos-actions/hebergement-langue-francaise/le-centre-dhebergement-de-beziers/",
		description: "La Cimade est une association de solidarité qui défend la dignité et les droits des personnes réfugiées, migrantes et sans-papiers. Elle propose un accompagnement juridique, intervient dans les centres de rétention, les bidonvilles et mène des actions de plaidoyer pour faire évoluer les politiques d'immigration et d'asile.",
		logo: "collectifs/cimade-logo.svg",
		type: ["Collectif militant"],
	},
	"la-combine": {
		slug: "la-combine",
		name: "La Combine",
		departement: "Gard",
		position: {lat: 44.20943817160611, lng: 4.037457683315754},
		description: "Tiers-lieu convivial et dynamique à La Grand'Combe",
		url: "https://www.lacombine30110.com/",
		logo: "collectifs/logo-la-combine.png",
		type: ["Tiers-lieu"]
	},
	"la-deter": {
		slug: "la-deter",
		name: "LA DÉTER",
		departement: "Gard",
		position: {lat: 44.209442, lng: 4.029818},
		url: "https://ladeter.org/",
		description: "LA DÉTER est un lieu bienveillant et inclusif, pour toutes et tous, qui invite à l’expression et à l’échange au travers de la création artistique.",
		logo: "collectifs/la-deter-logo.jpg",
		facebook: "https://www.facebook.com/ladeterlagrandcombe/",
		instagram: "https://www.instagram.com/ladeter_lagrandcombe/",
		type: ["Tiers-lieu"]
	},
	"la-freep": {
		slug: "la-freep",
		name: "La Freep",
		departement: "Hérault",
		facebook: "https://www.facebook.com/p/La-Freep-100041047963764/",
		position: {lat: 43.93382806238156, lng: 3.7037814723691067},
		type: ["Bar - Brasserie - Commerce"]
	},
	/*"la-fresque-du-sexisme":{
		slug:"la-fresque-du-sexisme",
		name:"La Fresque du sexisme",
		position:{lat:43.60587512905618, lng:3.862748843013884},
		logo:"collectifs/fresque-sexime-montpellier.png",
		url:"https://www.fresque-du-sexisme.org/",
		departement:"Hérault",
		instagram:"https://www.instagram.com/fresque_du_sexisme/",
		description:"Un atelier d'intelligence collective pour détricoter la mécanique sexiste et se projeter dans une société égalitaire.",
	},*/
	"la-mauvaise-reputation": {
		slug: "la-mauvaise-reputation",
		name: "Librairie la Mauvaise Réputation",
		departement: "Hérault",
		position: {lat: 43.609652, lng: 3.873119},
		facebook: "https://www.facebook.com/p/Librairie-La-Mauvaise-R%C3%A9putation-100076049269508/",
		description: "Nous sommes une librairie indépendante et bénévole montpelliéraine. Nous avons pour but la propagation de la pensée libertaire.",
		type: ["Librairie"]
	},
	"la-muse-broc": {
		slug: "la-muse-broc",
		name: "Bar - La Muse'Broc",
		departement: "Hérault",
		position: {lat: 43.73147838822666, lng: 3.319580632744901},
		url: "https://lamusebroc.com/",
		facebook: "https://www.facebook.com/lamusebroc/",
		instagram: "https://www.instagram.com/lamusebroc/",
		logo: "collectifs/amuse-broc-logo.webp",
		type: ["Café associatif"]
	},
	"la-retive": {
		slug: "la-retive",
		name: "La rétive",
		departement: "Gard",
		position: {lat: 44.129717, lng: 4.080132},
		url: "https://laretive.info/",
		description: "La Rétive est une bibliothèque/médiathèque et un lieu de rencontres et d’échanges. Elle est gratuite et accessible à toutes et tous.",
		type: ["Tiers-lieu"]
	},
	"la-symbolique-du-poulet": {
		slug: "la-symbolique-du-poulet",
		name: "Librairie la symbolique du poulet",
		departement: "Hérault",
		position: {lat: 43.607377, lng: 3.871099},
		url: "https://symboliquedupoulet.org/",
		logo: "collectifs/LaSDP_logo.png",
		type: ["Librairie"]
	},
	/*"ldh-beziers":{
		slug:"ldh-beziers",
		name: "Ligue des droits de l'Homme - Beziers",
		position: {lat:43.341765, lng:3.217704},
		departement: "Hérault",
		type:["Collectif militant"],
		url:"https://ldhbeziers.fr/",
		logo: "collectifs/LDH.png"
	},*/
	"ldh-mondpellier": {
		slug: "ldh-mondpellier",
		name: "LDH Montpellier",
		departement: "Hérault",
		position: {lat: 43.610352, lng: 3.892164},
		logo: "collectifs/LDH.png",
		url: "https://www.ldh-france.org/",
		facebook: "https://www.facebook.com/ldhmontpellier/?locale=fr_FR",
		instagram: "https://www.instagram.com/ldh_montpellier/",
		type: ["Collectif militant"],
	},
	/* "le-clap":{
		slug: "le-clap",
		name: "Le Clap",
		departement: "Hérault",
		position: { lat: 43.730138, lng: 3.323997 },
	},*/
	/*"le-cri-du-choeur":{
		slug:"le-cri-du-choeur",
		name:"Le Cri du Choeur",
		departement:"Hérault",
		position:{lat:43.611466285579944, lng:3.881652577067518},
		url:"https://criduchoeur.jimdofree.com/",
		description:"Le Cri du Chœur, chorale militante, c'est une volonté commune : retrouver une voix confisquée par un système inhumain en partageant des chants de lutte.",
		type:["Collectif artistique", "Collectif militant"]
	},*/
	"le-grain-des-mots": {
		slug: "le-grain-des-mots",
		name: "Librairie le Grain des Mots",
		departement: "Hérault",
		position: {lat: 43.607925, lng: 3.873901},
		url: "https://legraindesmots.com/",
		facebook: "https://www.facebook.com/LibrairieLeGraindesMots/?locale=fr_FR",
		logo: "collectifs/logo-le-grain-des-mots.png",
		type: ["Librairie"]
	},
	/* "le-maquis":{
		slug: "le-maquis",
		name: "Le Maquis",
		departement: "Hérault",
		position: { lat: 43.730639, lng: 3.318751 },
	},*/
	"le-nouveau-cafe": {
		slug: "le-nouveau-cafe",
		name: "Le nouveau Café",
		position: {lat: 43.3115006093407, lng: 3.4702906698387856},
		description: "Café associatif. Programmation d’évènements et ateliers participatifs. Restauration.",
		logo: "collectifs/nouveau-cafe-logo.png",
		departement: "Hérault",
		facebook: "https://www.facebook.com/Digotorn/",
		type: ["Café associatif"]
	},
	"le-poing": {
		slug: "le-poing",
		name: "Le Poing",
		departement: "Hérault",
		position: {lat: 43.616505, lng: 3.862295},
		facebook: "https://www.facebook.com/lepoinginfo/",
		logo: "collectifs/le-poing-logo.png",
		instagram: "https://www.instagram.com/montpellierpoinginfo/",
		bluesky: "https://bsky.app/profile/lepoinginfo.bsky.social",
		description: "Le Poing est un média web et papier (bimestriel) d’information politique et de critique sociale. Aux côtés de celles et ceux qui luttent, notre journal participatif s’attache à être un contre-pouvoir à Montpellier et alentours.",
		url: "https://lepoing.net/",
		type: ["Média"]
	},
	/*"le-pont":{
		slug:"le-pont",
		name:"Le Pont - Café Associatif",
		position:{lat:43.770398778777405, lng:3.374704671164288},
		facebook:"https://www.facebook.com/lepont34700/?locale=fr_FR",
		departement:"Hérault",
		logo:"collectifs/le-pont-logo.jpg",
		description:"Le Pont, c’est un Espace de Vie Sociale ouvert à tous où chacun peut proposer et faire vivre des projets collectifs",
		type:["Café associatif"]
	},*/
	"le-quartier-genereux": {
		slug: "le-quartier-genereux",
		name: "Le Quartier Généreux",
		departement: "Hérault",
		logo: "collectifs/quartier-genereux-logo.svg",
		position: {
			lat: 43.61594775505337,
			lng: 3.874829074309236,
		},
		description: `Le Quartier Généreux est votre café-bar associatif et engagé en centre-ville de Montpellier, situé place Albert 1er. Il est résolument tourné vers la ville et le quartier. Il met à l’honneur les initiatives du coin, soutient les associations locales et donne une scène ouverte aux diverses offres culturelles montpelliéraines. `,
		url: "https://quartiergenereux.fr/",
		instagram: "https://www.instagram.com/qg.montpellier/",
		facebook: "https://www.facebook.com/qg.montpellier/",
		type: ["Café associatif"]
	},
	"le-pain-de-la-bouche": {
		slug: "le-pain-de-la-bouche",
		name: "Le pain d'la bouche",
		description: "Le pain d’la bouche, ce sont des habitant.es qui souhaitent mettre leur force collective autour : de l’alimentation comme commun, de savoir-faire à défendre et d’envies de partager des manières d’associer gastronomie, autonomie et sécurité alimentaires. Le pain d’la bouche, c’est un outil au service d’un territoire : un four mobile auto-construit en terre-paille avec lequel se déplacent et se déploient plein d’activités...",
		departement: "Gard",
		bdv: "30350",
		type: ["Collectif militant"],
	},
	"le-recif": {
		slug: "le-recif",
		name: "Le Récif",
		description: "Le RÉCIF est une association d’Éducation Populaire et d’actions culturelles. Le collectif développe des actions permettant la diffusion d’idées et d’outils de l’Éducation Populaire.",
		departement: "Hérault",
		type: ["Tiers-lieu", "Collectif d'éducation populaire"],
		logo: "collectifs/le-recif.webp",
		instagram: "https://www.instagram.com/le_recif_collectif",
		position: {lat: 43.60569217045826, lng: 3.871344504739471},
		facebook: "https://www.facebook.com/assolerecif",
		url: "https://linktr.ee/Recif_association"
	},
	"les-ateliers-de-l-espoir": {
		slug: "les-ateliers-de-l-espoir",
		name: "Les ateliers de l'espoir",
		position: {lat: 43.616069984395224, lng: 3.8749604255900065},
		url: "https://ateliersdelespoir.fr/",
		departement: "Hérault",
		description: "Les Ateliers de l’espoir est une association d’organisation collective d’animateurs et d’animatrices qui luttent contre le fascime et pour le renouveau démocratique",
		logo: "collectifs/atelier-espoir-logo.png",
		type: ["Collectif militant", "Collectif d'éducation populaire"],
	},
	"les-amis-de-la-terre-le-vigan": {
		slug: "les-amis-de-la-terre-le-vigan",
		name: "Les amis de la terre Le Vigan",
		departement: "Gard",
		position: {lat: 43.9928660524861, lng: 3.6063399835858654},
		logo: "collectifs/amis-terre-france-logo.png",
		type: ["Collectif militant"],
	},
	/* "les-aragantes":{
		slug: "les-aragantes",
		name: "Les aragantes",
		departement: "Hérault",
		position: { lat: 43.6143, lng: 3.8717 },
		logo: "collectifs/les-aragantes.webp",
		instagram:"https://www.instagram.com/lesaragantes/",
		description:"Les Aragantes est une collective de designer.euse.s pluridisciplinaires réunies autour d’une volonté commune : faire du design un outil critique, engagé et au service des luttes écoféministes.",
		type:["Collectif militant"],
	},*/
	"les-soulevements-de-la-terre-nimes": {
		slug: "les-soulevements-de-la-terre-nimes",
		name: "Les soulèvements de la Terre - Comité de Nîmes",
		position: {lat: 43.8, lng: 4.35},
		type: ["Collectif militant"],
		departement: "Gard",
		description: "Mouvement écologiste contre l'artificialisation des sols, l'accaparement de l'eau, pour une agriculture respectueuse",
		url: "https://lessoulevementsdelaterre.org/",
		logo: "collectifs/soulevements-de-la-terre.webp",
		facebook: "https://www.facebook.com/soulevementsterre",
		instagram: "https://www.instagram.com/soulevements.de.la.terre/",
		bluesky: "https://bsky.app/profile/lessoulevements.bsky.social",
	},
	"fourmiliere-lodevois-larzac": {
		slug: "fourmiliere-lodevois-larzac",
		name: "La Fourmilière Lodévois-Larzac",
		departement: "Hérault",
		description:
			"Collectifs des associations et des militant.es du Lodévois et Larzac mobilisé.es pour créer un événement long à cheval sur la dernière. Des associations des communes de Celles, Lodève, Octon, Saint-Étienne-de-Gourgas",
		position: {lat: 43.716671, lng: 3.31667},
		type: ["Groupement de collectifs", "Festival"]
	},
	"les-siestes-mutines": {
		slug: "les-siestes-mutines",
		name: "Les siestes mutines",
		departement: "Hérault",
		description: "Siestes en open air",
		position: {lat: 43.6143, lng: 3.8717},
		type: ["Collectif événementiel", "Collectif militant"]
	},
	"librairie-arbre-sans-fin": {
		slug: "librairie-arbre-sans-fin",
		name: "Librairie L'Arbre sans fin",
		position: {lat: 43.93418991870921, lng: 3.7073513832428167},
		facebook: "https://www.facebook.com/librairielarbresansfin",
		instagram: "https://www.instagram.com/librairielarbresansfin/",
		departement: "Hérault",
		logo: "collectifs/larbre-sans-fin-logo.png",
		type: ["Librairie"]
	},
	"librairie-la-cavale": {
		slug: "librairie-la-cavale",
		name: "Librairie La Cavale",
		position: {lat: 43.61661157197688, lng: 3.8809897076458557},
		url: "https://librairielacavale.coop/",
		departement: "Hérault",
		logo: "collectifs/la-cavale-logo.png",
		description: "Librairie généraliste et coopérative de Montpellier",
		instagram: "https://www.instagram.com/librairielacavale/",
		facebook: "https://www.facebook.com/librairielacavale/?locale=fr_FR",
		type: ["Librairie"]
	},
	"librairie-un-point-un-trait": {
		slug: "librairie-un-point-un-trait",
		name: "Librairie Un point un trait",
		departement: "Hérault",
		position: {lat: 43.73166074687373, lng: 3.321491511270203},
		url: "https://www.unpointuntrait.fr/",
		type: ["Librairie"]
	},
	"librairie-alterlivres": {
		slug: "librairie-alterlivres",
		name: "Librairie Alterlivres",
		departement: "Gard",
		position: {lat: 43.9433317470306, lng: 3.9491332684382647},
		logo: "collectifs/logo-librairie-alterlive.webp",
		url: "http://www.alterlivres.com/",
		type: ["Librairie"],
		description: "Alterlivres c’est un choix décalé de livres en tous genres, un mélange qui va de l’Histoire aux récits d’aventure, de la littérature dessinée aux beaux livres illustrés proposés à des prix surprenants, du roman noir à la littérature mal élevée. Et aussi des essais et des pamphlets pour y voir plus clair dans ce qui se passe dans le monde, sans oublier des livres pour enfants choisis avec soin.",
		facebook: "https://www.facebook.com/alterlivres"
	},
	"marche-climat-montpellier": {
		slug: "marche-climat-montpellier",
		name: "Marche pour le climat, la paix et la solidarité",
		departement: "Hérault",
		position: {lat: 43.6094, lng: 3.8814},
		type: ["Collectif militant"],
		description: "Nous souhaitons défendre des valeurs essentielles et donner de la visibilité à des causes justes et durables. Dans une ambiance conviviale ouverte à tou.te.s nous marcherons pour exiger des mesures politiques qui permettent de construire ensemble un monde où les êtres vivants pourront coexister en paix.",
		url: "https://26septembre.org/",
		instagram: "https://www.instagram.com/m26septembre/",
		facebook: "https://www.facebook.com/people/26-Septembre/61592712691495/",
		logo: "collectifs/marche-climat.webp"
	},
	"melando": {
		slug: "melando",
		name: "Melando",
		description: "Melando est une association qui, depuis 16 ans, organise en itinérance dans les villages du Pic Saint Loup des spectacles, des ateliers et des rencontres artistiques et culturelles. Depuis janvier 2026 c'est aussi un espace de vie sociale avec un local à St Martin-de-Londres et des RDV réguliers, chaque semaine, dans le bassin londrain et le plateau violien.",
		departement: "Hérault",
		type: ["Collectif artistique"],
		position: {lat: 43.791522722735316, lng: 3.7312672437868444},
		url: "www.melando.fr",
		instagram: "https://www.instagram.com/melandosaisonartistique/",
		facebook: "https://www.facebook.com/rencontresdesculturesenpicsaintloup/",
		logo: "collectifs/melando-logo.png"
	},
	"mets-ta-peau": {
		slug: "mets-ta-peau",
		name: "Mets ta peau",
		position: {lat: 43.61058841077423, lng: 3.8704047116330846},
		departement: "Hérault",
		type: ["Collectif artistique", "Collectif d'éducation populaire"],
		url: "https://www.helloasso.com/associations/mets-ta-peau",
		facebook: "https://www.facebook.com/p/Mets-ta-peau-100091004104653/",
		description: "Mets ta peau s'engage à rendre la création littéraire écopoétique accessible à toutes et tous à travers des ateliers d'écriture, des enquêtes sensibles, des publications originales, des évènements conviviaux ainsi qu'un atlas montpelliérain des altérations écologiques.",
		logo: "collectifs/mets-ta-peau.png"

	},
	/*"mtmsi":{
		slug:"mtmsi",
		name:"Maison des Territoires du Monde et de la Solidarité Internationale",
		position:{lat:43.61465092197385, lng:3.8803502576714233},
		departement:"Hérault",
		description:"Collectif de 40 associations qui manifestent leur engagement pour le développement durable et solidaire des pays du Sud, depuis 30 ans",
		facebook:"https://www.facebook.com/MTMSI/?locale=fr_FR",
		url:"https://mtmsi.fr/",
		logo:"collectifs/mtmsi-logo.png",
		type:["Collectif militant"]
	},*/
	"mrap-montpellier": {
		slug: "mrap-montpellier",
		name: "MRAP - Montpellier",
		position: {lat: 43.61456618517023, lng: 3.8802294933338235},
		departement: "Hérault",
		facebook: "https://www.facebook.com/p/MRAP-de-Montpellier-100079927142334/",
		logo: "collectifs/mrap-logo.png",
		description: "Mouvement contre le Racisme et pour l’Amitié entre les Peuples - Comité local de Montpellier",
		url: "https://mrap.fr/",
		type: ["Collectif militant"],
	},
	"nous-carcassone": {
		slug: "nous-carcassone",
		name: "Nous Carcassone",
		url: "https://nouscarcassonne.fr/",
		departement: "Aude",
		position: {lat: 43.216289, lng: 2.353972},
		description: "Né d'un sursaut citoyen porté par l'énergie de la jeunesse locale, Nous Carcassonne rassemble les jeunes, lycéen·ne·s et étudiant·e·s, habitant·e·s et forces vives de Carcassonne et ses alentours. Nous formons un rempart pacifique, politique et culturel contre les idées d'exclusion, de division et de repli portées notamment par l'extrême droite que nous combattons. Notre force réside dans notre unité. Résistance ? Nous n'hésitons pas à utiliser le terme.",
		logo: "collectifs/nous-carcassone.png",
		instagram: "https://www.instagram.com/nouscarcassonne",
		type: ["Collectif militant"],
	},
	"pays-viganais-terre-d-accueil": {
		slug: "pays-viganais-terre-d-accueil",
		name: "Pays Viganais Terre d'Accueil",
		description: "Collectif qui accueille et accompagne des personnes en situation d'exil.",
		departement: "Gard",
		type: ["Collectif d'accueil de réfugiés"],
		position: {lat: 43.99224296746191, lng: 3.6066859556171114},
		url: "https://www.pvigtac.fr/"
	},
	/* "nouvelle-librairie-setoise":{
		slug: "nouvelle-librairie-setoise",
		name: "Nouvelle Librairie Sétoise",
		departement: "Hérault",
		position: { lat: 43.402978, lng: 3.69478 },
		logo:"collectifs/nouvelle-librairie-setoise.png",
		facebook:"https://www.facebook.com/nouvellelibrairiesetoise/?locale=fr_FR",
		instagram:"https://www.instagram.com/nouvellelibrairiesetoise/",
		url:"https://www.nouvellelibrairiesetoise.fr/",
		type:["Librairie"]
	},*/
	"oned": {
		slug: "oned",
		name: "Observatoire Départementale de l’Extrême Droite de l’Hérault",
		position: {lat: 43.618107530449706, lng: 3.894658031097642},
		departement: "Hérault",
		url: "https://oned-fr.org/herault-creation-dun-observatoire-departemental-de-lextreme-droite/",
		logo: "collectifs/obs-ed-logo.webp",
		type: ["Collectif militant"],
	},
	"oustalite": {
		slug: "oustalite",
		name: "Oustalité",
		departement: "Hérault",
		position: {lat: 43.736189, lng: 3.317013},
		facebook: "https://www.facebook.com/people/LOustalit%C3%A9-Lod%C3%A8ve/pfbid0qPBaumns8hJcSnxMSxHL33aKqjYe81tDE96XBWA5dUSBK59Zn7x28mnNwVwJVfGEl/",
		logo: "collectifs/oustalite-logo.png",
		type: ["Collectif d'accueil de réfugiés"]
	},
	"oai-e-libertat": {
		slug: "oai-e-libertat",
		name: "Oaï e Libertat - Nîmes Antifasciste",
		description: "Oaï e Libertat, « bordel et liberté » en occitan, veut se réapproprier les espaces de notre territoire en y combattant le fascisme et les garants de l'ordre social dominant (police, justice). Nous sommes antifascistes, et notre esprit de résistance se définit dans la lutte contre le racisme, le sexisme, les LGBTphobies et toute autre forme de discrimination.",
		departement: "Gard",
		type: ["Collectif militant"],
		instagram: "https://www.instagram.com/oai_e_libertat/",
		logo: "collectifs/oai-e-libertat.png",
		bdv: "30189"
	},
	"planning-familial-sud-cevennes": {
		slug: "planning-familial-sud-cevennes",
		name: "Planning familial Sud Cévennes",
		departement: "Gard",
		position: {lat: 43.99269466517533, lng: 3.606314781478429},
		facebook: "https://www.facebook.com/people/Planning-familial-Sud-C%C3%A9vennes/61582758747377/",
		instagram: "https://www.instagram.com/planningfamilial_sudcevennes/",
		logo: "collectifs/planning-familial-sud-cevennes.png",
		url: "https://www.planning-familial.org/",
		type: ["Collectif militant", "Collectif d'éducation populaire"],
	},
	"poles-en-pomme": {
		slug: "poles-en-pomme",
		name: "Pôles en pomme 🍎",
		departement: "Hérault",
		position: {lat: 43.651023, lng: 3.509992},
		description:
			"Redonner à chacun la capacité de comprendre, choisir et agir sur le monde dans lequel il vit.",
		url: "https://polesenpomme.xyz",
		type: ["Collectif militant", "Collectif d'éducation populaire"],
	},
	/* "pride-ales-2026":{
		slug: "pride-ales-2026",
		name: "Pride Alès 2026",
		departement: "Gard",
		position: { lat: 44.121853, lng: 4.102278 },
		instagram: "https://www.instagram.com/pridedales/",
		type:["Collectif militant"],
	},*/
	"queer-team-arles": {
		slug: "queer-team-arles",
		name: "Queer Team Arles",
		departement: "Bouches-du-Rhône",
		description: "Asso LGBTQI+ arlésienne",
		type: ["Collectif militant"],
		position: {lat: 43.67640985146661, lng: 4.62761377050663},
		instagram: "https://www.instagram.com/queerteam_arles",
		logo: "collectifs/queer-team-arles.png"
	},
	"radio-vadrouille": {
		slug: "radio-vadrouille",
		name: "Radio Vadrouille",
		description: "Webradio nomade et populaire avec des gros bouts de vie dedans et un topping d’éduc.pop",
		departement: "Hérault",
		type: ["Média"],
		position: {lat: 43.60129, lng: 3.86652},
		logo: "collectifs/radio-vadrouille.png",
		url: "https://www.radiovadrouille.com/",
		instagram: "https://www.instagram.com/radio.vadrouille"
	},
	"raices-flamencas": {
		slug: "raices-flamencas",
		name: "Raices Flamencas",
		departement: "Hérault",
		instagram: "https://www.instagram.com/raices_flamencas_/",
		facebook: "https://www.facebook.com/Elduenderaicesflamencas",
		type: ["Collectif artistique"],
		bdv: "34172"
	},
	"reso-resistances-solidaires": {
		slug: "reso-resistances-solidaires",
		name: "Réso Résistances Solidaires",
		departement: "Hérault",
		description:
			"Collectif universitaire de Résistance et Solidarité face aux idées d'extrême droite",
		position: {lat: 43.6313618030923, lng: 3.861349533261347},
		logo: "collectifs/reso-logo.png",
		type: ["Collectif militant"],
	},
	"resf-34": {
		slug: "resf-34",
		name: "Réseau Éducation Sans Frontières 34 (RESF)",
		position: {lat: 43.617649720505405, lng: 3.8742467689078874},
		departement: "Hérault",
		url: "https://resf34.org/",
		logo: "collectifs/resf-logo.png",
		type: ["Collectif militant"],
	},
	"rusf-34": {
		slug: "rusf-34",
		name: "Réseau Université Sans Frontières 34 (RUSF)",
		departement: "Hérault",
		position: {lat: 43.632275745550565, lng: 3.868407683345444},
		description: "Collectif d'accompagnement, de soutient et de luttes avec les étudiant-es étranger-es avec ou sans papiers !",
		url: "https://rusf34.fr/",
		instagram: "https://www.instagram.com/rusf_34/",
		facebook: "https://www.facebook.com/RUSF34/",
		logo: "collectifs/rusf-logo.png",
		type: ["Collectif militant"],
	},
	"solidaires-etudiants-34": {
		slug: "solidaires-etudiants-34",
		name: "Solidaires étudiant-e-s Montpellier",
		description: "Syndicat étudiant de luttes, de classe et autogestionnaire sur Montpellier ! Antifasciste, féministe, internationaliste.",
		url: "https://solidairesetudiants34.wordpress.com/",
		instagram: "https://instagram.com/solidairesetumtp",
		bluesky: "https://bsky.app/profile/solidairesetumtp.bsky.social",
		position: {lat: 43.63439415847738, lng: 3.8703542910335234},
		departement: "Hérault",
		logo: "collectifs/solidaires-etudiant-montpellier.jpg",
		type: ["Syndicat"],
	},
	"solidarite-antispeciste": {
		slug: "solidarite-antispeciste",
		name: "Solidarité antispéciste",
		description: "Collectif tantispéciste et antifaciste. En lutte pour la libération animale 🏴.",
		departement: "Aude",
		bdv: "11069",
		type: ["Collectif militant"],
		logo: "collectifs/solidarite-antispeciste.png",
		instagram: "https://www.instagram.com/solidarite_antispeciste/"
	},
	"streetpress":{
		slug: "streetpress",
		name:"Streetpress",
		type:["Média"],
		description:"🗨️ Des histoires, des enquêtes et de l’impact.",
		logo:"collectifs/streetpress.png",
		departement:"Hérault",
		bdv: "34172",
		url:"https://soutenir.streetpress.com/",
		instagram:"https://www.instagram.com/streetpress",
		facebook:"https://www.facebook.com/StreetPress/"
	},
	"sud-education-34": {
		slug: "sud-education-34",
		name: "Sud éducation Hérault",
		position: {lat: 43.616627127376795, lng: 3.878247311848792},
		departement: "Hérault",
		url: "https://sudeducation34.org/",
		logo: "collectifs/sud-34-logo.png",
		facebook: "https://www.facebook.com/sudeducation34/",
		instagram: "https://www.instagram.com/sudeducationherault/",
		bluesky: "https://bsky.app/profile/sudeducation34.bsky.social",
		type: ["Syndicat"],
	},
	"societe-du-cafe-du-siecle": {
		slug: "societe-du-cafe-du-siecle",
		name: "Société du Café du siècle",
		departement: "Hérault",
		position: {lat: 43.934128, lng: 3.707733},
		type: ["Bar - Brasserie - Commerce"]
	},
	/* "terres-de-luttes":{
		slug: "terres-de-luttes",
		name: "Terres de luttes - Aveyron",
		departement: "Aveyron",
		position: { lat: 43.919845, lng: 3.26479 },
		logo:"collectifs/terres-de-lutte-aveyron.png",
		description:"Terres de Luttes s’oppose à la bétonisation de nos terres, bradées au profit d’extension d’aéroports, d’entrepôts Amazon ou autres centres commerciaux par centaines.",
		facebook:"https://www.facebook.com/TerresdeLuttes",
		instagram:"https://www.instagram.com/terresdeluttes/",
		type:["Collectif militant"]
	},*/
	"theatre-dans-la-foret": {
		slug: "theatre-dans-la-foret",
		name: "Théâtre dans la Forêt",
		logo: "collectifs/theatre-dans-la-foret.png",
		position: {lat: 43.77844543889691, lng: 3.4173633589575894},
		departement: "Hérault",
		type: ["Théâtre"],
		url: "https://parlatges.org/",
		facebook: "https://www.facebook.com/parlatges"
	},
	"theatre-beaux-arts-tabards": {
		slug: "theatre-beaux-arts-tabards",
		name: "Théâtre Beaux Arts Tabards",
		position: {lat: 43.61693709334822, lng: 3.8782535113901693},
		departement: "Hérault",
		url: "https://beauxartstabard.fr/",
		facebook: "https://www.facebook.com/beauxartstabard/?locale=fr_FR",
		instagram: "https://www.instagram.com/theatre_beaux_arts_tabard/",
		logo: "collectifs/theatre-beaux-arts-tabard-logo.svg",
		type: ["Théâtre"]
	},
	"theatre-la-bicyclette": {
		slug: "theatre-la-bicyclette",
		name: "Théâtre La Bicyclette",
		url: "https://theatre-la-bicyclette.fr/",
		logo: "collectifs/theatre-la-bicyclette-logo.webp",
		facebook: "https://www.facebook.com/p/Th%C3%A9%C3%A2tre-de-la-Bicyclette-100086652006023/",
		position: {lat: 43.73130759652439, lng: 3.320308635405843},
		departement: "Hérault",
		type: ["Théâtre"]
	},
	"theatre-de-la-plume": {
		slug: "theatre-de-la-plume",
		name: "Théâtre de la Plume",
		departement: "Hérault",
		position: {lat: 43.608605, lng: 3.866927},
		logo: "collectifs/theatre-de-la-plume-logo.png",
		url: "https://www.theatredelaplume.com/",
		facebook: "https://www.facebook.com/TheatreDeLaPlume/?locale=fr_FR",
		instagram: "https://www.instagram.com/theatredelaplume/",
		description: "🎭 Théâtre Associatif 🎭 - Programmation jeune public et adulte !",
		type: ["Théâtre"]
	},
	"transmissions": {
		slug: "transmissions",
		name: "Transmissions",
		description: "L'association a pour but l'élaboration, le financement et la mise en place de projets, sous forme d'échanges, d'activités et d'ateliers, destinés à répondre aux besoins de personnes et de groupes marginalisés, renforcer les capacités d'organisation et de solidarité",
		departement: "Aude",
		type: ["Collectif militant"],
		position: {"lat": 42.935511071759784, lng: 2.114441171340727},
		logo: "collectifs/logo-transmissions.webp",
		url: "https://www.helloasso.com/associations/transmissions",
		instagram: "https://www.instagram.com/assotransmissions"
	},
	/* "tisseur-d-espoir":{
		slug: "tisseur-d-espoir",
		name: "Tisseurs et tisseuses d'espoir",
		departement: "Hérault",
		position: { lat: 43.701115350116154, lng:3.552542229646186 },
		url:"https://tisseurs-tisseuses-despoir.jimdofree.com/",
		logo:"collectifs/tisseurs-espoirs-logo.png",
		type:["Groupement de collectifs", "Festival"]
	},*/
	"union-communiste-libertaire": {
		slug: "union-communiste-libertaire",
		name: "Union Communiste Libertaire (UCL)",
		departement: "Hérault",
		position: {lat: 43.609651, lng: 3.873127},
		description:
			"Nous somme une organisation politique libertaire non-électoraliste. Nous tenons également une librairie anarchiste : la Mauvaise Réputation.",
		logo: "collectifs/ucl-logo.webp",
		url: "https://montpellier.unioncommunistelibertaire.org/",
		instagram: "https://www.instagram.com/ucl_montpellier",
		type: ["Collectif militant"]
	},
	"union-locale-cgt": {
		slug: "union-locale-cgt",
		name: "Union locale de la CGT",
		departement: "Gard",
		bdv: "30150",
		type: ["Syndicat"]
	},
	"union-syndicale-solidaire-34": {
		slug: "union-syndicale-solidaire-34",
		name: "Union syndicale Solidaires 34",
		departement: "Hérault",
		position: {lat: 43.616695, lng: 3.878214},
		logo: "collectifs/solidaires-34.png",
		url: "https://solidaires34.org/",
		instagram: "https://www.instagram.com/solidaires_34/",
		facebook: "https://www.facebook.com/solidaires34/",
		bluesky: "https://bsky.app/profile/did:plc:dcgtszcxbbly3ggq64l4jj3r",
		type: ["Syndicat"],
	},
	/* "utopia-montpellier":{
		slug: "utopia-montpellier",
		name: "Cinéma Utopia Montpellier",
		departement: "Hérault",
		position: { lat: 43.629019, lng: 3.869085 },
		facebook:"https://www.facebook.com/utopia34/",
		description:"Cinéma indépendant \"art et essai\"",
		url:"https://montpellier.cinemas-utopia.org/",
		type:["Cinéma"]
	},*/
	"vivons-celles": {
		slug: "vivons-celles",
		name: "Vivons Celles",
		departement: "Hérault",
		position: {lat: 43.661942, lng: 3.339329},
		logo: "collectifs/vivons-celles-logo.png",
		facebook: "https://www.facebook.com/vivonscelles",
		description: "Association pour la réhabilitation du village de Celles.",
		type: ["Collectif pour mieux habiter"]
	},
	"volkane": {
		slug: "volkane",
		name: "Volkan.e",
		departement: "Hérault",
		bdv: "34172",
		logo: "collectifs/volkane.jpg",
		type: ["Collectif artistique", "Collectif militant"],
		description: "Collectif d'artivistes engagé.es contre toutes les formes d'oppression, nous appelons l'art au secours de nos luttes."
	}
};
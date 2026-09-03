import cinema_cover from "../../assets/events/cinema.png?url";
import concert_cover from "../../assets/events/concert.png?url";
import conf_cover from "../../assets/events/conf.png?url";
import picnic_cover from "../../assets/events/picnic.png?url";
import autre_cover from "../../assets/events/autre.png?url";
import djset_cover from "../../assets/events/djset.png?url";
import openair_cover from "../../assets/events/openair.png?url";
import balpop_cover from "../../assets/events/balpop.png?url";
import ag_cover from "../../assets/events/ag.png?url";
import kermesse_cover from "../../assets/events/kermesse.png?url";
import theatre_cover from "../../assets/events/theatre.png?url";
import manif_cover from "../../assets/events/manif.png?url";
import atelier_cover from "../../assets/events/fresque.png?url";
import { type EventTypes } from "../../data/EventExtraData.js";

export const eventDefaultCover: (type: EventTypes) => string = (type) => {
  switch (type) {
    case "Projection":
    case "Ciné-débat":
      return cinema_cover;
    case "DJ Set":
      return djset_cover;
    case "Open Air":
      return openair_cover;
    case "Bal populaire":
      return balpop_cover;
    case "Concert":
      return concert_cover;
    case "AG":
      return ag_cover;
    case "Conférence":
    case "Rencontre Littéraire":
    case "Table-Ronde":
      return conf_cover;
    case "Picnic":
    case "Apéro":
    case "Repas partagé":
    case "Cantine":
    case "Goûter":
    case "Pizza":
    case "Banquet populaire":
      return picnic_cover;
    case "Kermesse":
    case "Loto":
    case "Expo":
    case "Braderie":
    case "Village Associatif":
      return kermesse_cover;
    case "Théâtre":
    case "Dragshow":
    case "Spectacle vivant":
    case "Conte":
    case "Lecture":
      return theatre_cover;
    case "Manifestation":
    case "Pride":
    case "Parade":
      return manif_cover;
    case "Atelier cuisine":
    case "Atelier d'expression":
    case "Fresque":
		case "Formation":
    case "Atelier sérigraphie":
      return atelier_cover;
    default:
      return autre_cover;
  }
};

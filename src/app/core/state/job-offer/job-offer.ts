import {Location} from "../location";
import {Seniority} from "../seniority";

export interface JobOffer {
  id: string;
  position: string;
  offerDescription: string;
  seniorities: Seniority[];
  locations: Location[];
}

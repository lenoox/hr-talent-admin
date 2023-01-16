import {Location} from "../location";
import {Seniority} from "../seniority";

export interface JobOfferResponse {
  id: string;
  position: string;
  offerDescription: string;
  seniorities: Seniority[];
  locations: Location[];
}
export interface JobOfferRequest{
  id: string;
  position: string;
  offerDescription: string;
  seniorities: string[];
  locations: string[];
}

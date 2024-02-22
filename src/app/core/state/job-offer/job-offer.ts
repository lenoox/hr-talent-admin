import { SeniorityDirectory } from '../../model/seniority';
import { LocationDirectory } from '../../model/location';

export interface JobOfferResponse {
  id: string;
  position: string;
  offerDescription?: string;
  seniorities?: SeniorityDirectory[];
  locations?: LocationDirectory[];
}
export interface JobOfferRequest {
  id: string;
  position: string;
  offerDescription: string;
  seniorities: string[];
  locations: string[];
}
export interface JobOfferForm {
  position: string;
  offerDescription: string;
  seniorities: SeniorityDirectory[];
  locations: LocationDirectory[];
}

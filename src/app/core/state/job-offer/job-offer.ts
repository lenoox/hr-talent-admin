import {Location} from "../location";
import {Seniority} from "../seniority";
export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Paginated<T> {
  items: T[];
  meta: Meta;
}
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

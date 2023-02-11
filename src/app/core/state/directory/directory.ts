import { Location } from '../location';
import { Seniority } from '../seniority';

export interface Directory {
  seniorities: Seniority[];
  locations: Location[];
}

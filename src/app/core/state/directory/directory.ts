import { LocationDirectory } from '../../model/location';
import { SeniorityDirectory } from '../../model/seniority';

export interface Directory {
  seniorities: SeniorityDirectory[];
  locations: LocationDirectory[];
}

import { LocationDirectory } from '../../model/location';
import { StatusDirectory } from '../../model/status';
import { JobOfferResponse } from '../job-offer/job-offer';

export interface CandidateResponse {
  id: string;
  name?: string;
  firstName: string;
  lastName: string;
  locations: LocationDirectory;
  position: string;
  attachment: string;
  aboutMe: string;
  status: StatusDirectory;
  jobOffer: JobOfferResponse[];
}

export interface CandidateRequest {
  status: string;
}

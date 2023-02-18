import { Location } from '../location';
import { Status } from '../status';
import { JobOfferResponse } from '../job-offer/job-offer';

export interface CandidateResponse {
  id: string;
  name?: string;
  firstName: string;
  lastName: string;
  locations: Location;
  position: string;
  attachment: string;
  aboutMe: string;
  status: Status;
  jobOffer: JobOfferResponse[];
}

export interface CandidateRequest {
  status: string;
}

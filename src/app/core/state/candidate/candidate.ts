import {Location} from "../location";
import {Status} from "../status";

export interface CandidateResponse {
  id: string;
  name?: string;
  firstName: string;
  lastName: string;
  locations: Location
  position: string;
  attachment: string;
  aboutMe: string;
  status: Status;
}

export interface CandidateRequest {
  status: string;
}

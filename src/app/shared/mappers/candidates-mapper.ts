import {CandidateRequest, CandidateResponse} from "../../core/state/candidate/candidate";

export function candidateFormToReqest(candidateResponse:any): CandidateRequest {
  const candidate = {
    status: candidateResponse.status.id,
  };
  return candidate;
}
export function candidateToList(candidateResponse:CandidateResponse): any {
  const candidate = {
    ...candidateResponse,
    name: `${candidateResponse?.firstName} ${candidateResponse.lastName}`,
    locations: candidateResponse.locations.name,
    status: candidateResponse.status,
  };
  return candidate;
}

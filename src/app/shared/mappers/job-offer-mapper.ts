import {JobOfferRequest, JobOfferResponse} from "../../core/state/job-offer/job-offer";
import {Seniority} from "../../core/state/seniority";
import {Location} from "../../core/state/location";

export function jobOfferFormToReqest(jobOfferResponse:JobOfferResponse): JobOfferRequest {
    const jobOffer = {
      ...jobOfferResponse,
      locations: jobOfferResponse.locations.map(({id}:Partial<Location>)=>id) as string[],
      seniorities: jobOfferResponse.seniorities.map(({id}:Partial<Seniority>)=>id) as string[],
    };
    return jobOffer;
}
export function jobOfferToList(jobOfferResponse:JobOfferResponse): any {
  const jobOffer = {
    ...jobOfferResponse,
    locations: jobOfferResponse.locations,
    seniorities: jobOfferResponse.seniorities
  };
  return jobOffer;
}

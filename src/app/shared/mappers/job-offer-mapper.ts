import {
  JobOfferForm,
  JobOfferRequest,
  JobOfferResponse,
} from '../../core/state/job-offer/job-offer';
import { LocationDirectory } from '../../core/model/location';
import { SeniorityDirectory } from '../../core/model/seniority';

export function jobOfferFormToRequest(
  jobOfferForm: JobOfferForm
): JobOfferRequest {
  return {
    ...jobOfferForm,
    locations: jobOfferForm.locations.map(
      ({ id }: Partial<LocationDirectory>) => id
    ) as string[],
    seniorities: jobOfferForm.seniorities.map(
      ({ id }: Partial<SeniorityDirectory>) => id
    ) as string[],
  } as JobOfferRequest;
}
export function jobOfferToList(jobOfferResponse: JobOfferResponse): any {
  const jobOffer = {
    ...jobOfferResponse,
    locations: jobOfferResponse.locations,
    seniorities: jobOfferResponse.seniorities,
  };
  return jobOffer;
}

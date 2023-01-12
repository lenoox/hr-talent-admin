import {JobOffer} from './job-offer';

export class GetJobOffer {
  static readonly type = '[JobOffer] Get'
  constructor(public id: string) {
  }
}

export class GetJobOffers {
  static readonly type = '[JobOffer] Get Job Offers'
}

export class AddJobOffer {
  static readonly type = '[JobOffer] Add Job Offer';

  constructor(public payload: JobOffer) {
  }
}

export class UpdateJobOffer {
  static readonly type = '[JobOffer] Update Job Offer'
  constructor(public payload: JobOffer, public id: string){

  }
}

export class DeleteJobOffer{
  static readonly type = '[JobOffer] Delete Job Offer';
  constructor(public id: string) {
  }
}

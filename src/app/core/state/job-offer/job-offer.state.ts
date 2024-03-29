import { JobOfferResponse } from './job-offer';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { JobOfferService } from '../../services/job-offer.service';
import { mergeMap, tap } from 'rxjs';
import {
  AddJobOffer,
  DeleteJobOffer,
  GetJobOffer,
  GetJobOffers,
  UpdateJobOffer,
} from './job-offer.action';
import { Injectable } from '@angular/core';
import { Paginated } from '../../model/paginated';
import { jobOfferToList } from '../../../shared/mappers/job-offer-mapper';
import {
  currentPageDefault,
  pageSizeDefault,
} from '../../constants/pagination.const';

export class JobOffersStateModel {
  jobOffers: Paginated<JobOfferResponse> | undefined;
  jobOffer: JobOfferResponse | undefined;
}
@State<JobOffersStateModel>({
  name: 'jobOffers',
  defaults: {
    jobOffers: undefined,
    jobOffer: undefined,
  },
})
@Injectable()
export class JobOfferState {
  constructor(private jobOffer: JobOfferService) {}

  @Selector()
  static getJobOfferList(state: JobOffersStateModel) {
    return state.jobOffers;
  }

  @Selector()
  static getJobOffer(state: JobOffersStateModel) {
    return state.jobOffer;
  }

  @Action(GetJobOffer)
  getJobOffer(
    { getState, setState }: StateContext<JobOffersStateModel>,
    { id }: JobOfferResponse
  ) {
    return this.jobOffer.fetchJobOffer(id).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          jobOffer: result,
        });
      })
    );
  }

  @Action(GetJobOffers)
  getJobOffers(
    { getState, setState }: StateContext<JobOffersStateModel>,
    { pageSize, currentPage }: { pageSize: number; currentPage: number }
  ) {
    return this.jobOffer.fetchJobOffers(pageSize, currentPage).pipe(
      tap((result: Paginated<JobOfferResponse>) => {
        const state = getState();
        const jobOfferList = result.items.map(results =>
          jobOfferToList(results)
        );
        setState({
          ...state,
          jobOffers: {
            items: jobOfferList,
            meta: result.meta,
          },
        });
      })
    );
  }

  @Action(AddJobOffer)
  addJobOffer(
    { getState, setState }: StateContext<JobOffersStateModel>,
    { payload }: AddJobOffer
  ) {
    return this.jobOffer.addJobOffer(payload).pipe(
      mergeMap(() => {
        return this.jobOffer.fetchJobOffers(
          pageSizeDefault,
          currentPageDefault
        );
      }),
      tap((result: Paginated<JobOfferResponse>) => {
        const state = getState();
        const jobOfferList = result.items.map(results =>
          jobOfferToList(results)
        );
        setState({
          ...state,
          jobOffers: {
            items: jobOfferList,
            meta: result.meta,
          },
        });
      })
    );
  }

  @Action(UpdateJobOffer)
  updateJobOffer(
    { getState, setState }: StateContext<JobOffersStateModel>,
    { payload, id }: UpdateJobOffer
  ) {
    return this.jobOffer.updateJobOffer(payload, id).pipe(
      tap(result => {
        const state = getState();
        const jobOffers = state.jobOffers.items.map(result =>
          jobOfferToList(result)
        );
        const jobOfferList = [...jobOffers];
        const jobOfferIndex = jobOfferList.findIndex(item => item.id === id);
        jobOfferList[jobOfferIndex] = result;
        setState({
          ...state,
          jobOffers: {
            items: jobOfferList,
            meta: state.jobOffers.meta,
          },
        });
      })
    );
  }

  @Action(DeleteJobOffer)
  deleteJobOffer(
    { getState, setState }: StateContext<JobOffersStateModel>,
    { id }: DeleteJobOffer
  ) {
    return this.jobOffer.deleteJobOffer(id).pipe(
      mergeMap(() => {
        return this.jobOffer.fetchJobOffers(
          pageSizeDefault,
          currentPageDefault
        );
      }),
      tap((result: Paginated<JobOfferResponse>) => {
        const state = getState();
        const jobOfferList = result.items.map(results =>
          jobOfferToList(results)
        );
        setState({
          ...state,
          jobOffers: {
            items: jobOfferList,
            meta: result.meta,
          },
        });
      })
    );
  }
}

import { CandidateResponse } from './candidate';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { mergeMap, tap } from 'rxjs';
import {
  GetCandidate,
  GetCandidates,
  UpdateCandidate,
} from './candidate.action';
import { Injectable } from '@angular/core';
import { Paginated } from '../paginated';
import { CandidateService } from '../../services/candidate.service';
import { candidateToList } from '../../../shared/mappers/candidates-mapper';
import {
  currentPageDefault,
  pageSizeDefault,
} from '../../constants/pagination.const';

export class CandidatesStateModel {
  candidates!: Paginated<CandidateResponse> | undefined;
  candidate!: CandidateResponse | undefined;
}
@State<CandidatesStateModel>({
  name: 'candidates',
  defaults: {
    candidates: undefined,
    candidate: undefined,
  },
})
@Injectable()
export class CandidateState {
  constructor(private candidateService: CandidateService) {}

  @Selector()
  static getCandidateList(state: CandidatesStateModel) {
    return state.candidates;
  }

  @Selector()
  static getCandidate(state: CandidatesStateModel) {
    return state.candidate;
  }

  @Action(GetCandidate)
  getCandidate(
    { getState, setState }: StateContext<CandidatesStateModel>,
    { id }: CandidateResponse
  ) {
    return this.candidateService.fetchCandidate(id).pipe(
      tap(result => {
        const candidateResult = candidateToList(result);
        const state = getState();
        setState({
          ...state,
          candidate: candidateResult,
        });
      })
    );
  }

  @Action(GetCandidates)
  getCandidates(
    { getState, setState }: StateContext<CandidatesStateModel>,
    { pageSize, currentPage }: { pageSize: number; currentPage: number }
  ) {
    return this.candidateService.fetchCandidates(pageSize, currentPage).pipe(
      tap((result: Paginated<CandidateResponse>) => {
        const state = getState();
        const candidatesList = result.items.map(results =>
          candidateToList(results)
        );
        setState({
          ...state,
          candidates: {
            items: candidatesList,
            meta: result.meta,
          },
        });
      })
    );
  }

  @Action(UpdateCandidate)
  updateCandidate(
    { getState, setState }: StateContext<CandidatesStateModel>,
    { payload, id }: UpdateCandidate
  ) {
    return this.candidateService.updateCandidate(payload, id).pipe(
      mergeMap(() => {
        return this.candidateService.fetchCandidates(
          pageSizeDefault,
          currentPageDefault
        );
      }),
      tap(result => {
        const state = getState();
        const candidatesList = result.items.map(candidates =>
          candidateToList(candidates)
        );
        setState({
          ...state,
          candidates: {
            items: candidatesList,
            meta: result.meta,
          },
        });
      })
    );
  }
}

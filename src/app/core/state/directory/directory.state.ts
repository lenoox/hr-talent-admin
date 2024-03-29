import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin, tap } from 'rxjs';
import { GetDirectory } from './directory.action';
import { Injectable } from '@angular/core';
import { SeniorityDirectory } from '../../model/seniority';
import { LocationDirectory } from '../../model/location';
import { DirectoryService } from '../../services/directory.service';
import { StatusDirectory } from '../../model/status';

export class DirectoriesStateModel {
  seniorities: SeniorityDirectory[];
  locations: LocationDirectory[];
  statuses: StatusDirectory[] | undefined;
}
@State<DirectoriesStateModel>({
  name: 'directories',
  defaults: {
    seniorities: [],
    locations: [],
    statuses: undefined,
  },
})
@Injectable()
export class DirectoryState {
  constructor(private directoryService: DirectoryService) {}

  @Selector()
  static getSeniorities(state: DirectoriesStateModel) {
    return state.seniorities;
  }

  @Selector()
  static getLocations(state: DirectoriesStateModel) {
    return state.locations;
  }
  @Selector()
  static getStatuses(state: DirectoriesStateModel) {
    return state.statuses;
  }

  @Action(GetDirectory)
  getDirectories({ getState, setState }: StateContext<DirectoriesStateModel>) {
    return forkJoin([
      this.directoryService.fetchSeniorities(),
      this.directoryService.fetchLocations(),
      this.directoryService.fetchStatuses(),
    ]).pipe(
      tap(([seniorities, locations, statuses]: any) => {
        const state = getState();
        setState({
          ...state,
          seniorities: seniorities,
          locations: locations,
          statuses: statuses,
        });
      })
    );
  }
}

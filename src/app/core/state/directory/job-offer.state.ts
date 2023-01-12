import {Action, Selector, State, StateContext} from "@ngxs/store";
import {mergeMap, tap} from "rxjs";
import { GetDirectory} from "./job-offer.action";
import {Injectable} from "@angular/core";
import {Seniority} from "../seniority";
import {Location} from "../location";
import {DirectoryService} from "../../services/directory.service";

export class DirectoriesStateModel {
  seniorities?: Seniority[];
  locations?: Location[];
}
@State<DirectoriesStateModel>({
  name: 'Directories',
  defaults: {
    seniorities: [],
    locations: []
  }
})
@Injectable()
export class JobOfferState {
  constructor(private directoryService: DirectoryService) {
  }

  @Selector()
  static getSeniorities(state: DirectoriesStateModel){
    return state.seniorities
  }

  @Selector()
  static getLocations(state: DirectoriesStateModel){
    return state.locations
  }

  @Action(GetDirectory)
  getJobOffer({getState,setState}: StateContext<DirectoriesStateModel>){
    return this.directoryService.fetchSeniorities().pipe(
      mergeMap(() => this.directoryService.fetchLocalizations()),
      tap(([seniorities,localizations]: any)=>{
      const state = getState();
      setState({
        ...state,
        seniorities: [...seniorities],
        locations: [...localizations]
      })
    }))
  }
}

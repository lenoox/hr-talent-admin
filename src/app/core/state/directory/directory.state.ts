import {Action, Selector, State, StateContext} from "@ngxs/store";
import {forkJoin, tap} from "rxjs";
import { GetDirectory} from "./directory.action";
import {Injectable} from "@angular/core";
import {Seniority} from "../seniority";
import {Location} from "../location";
import {DirectoryService} from "../../services/directory.service";

export class DirectoriesStateModel {
  seniorities!: Seniority[];
  locations!: Location[];
}
@State<DirectoriesStateModel>({
  name: 'directories',
  defaults: {
    seniorities: [],
    locations: []
  }
})
@Injectable()
export class DirectoryState {
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
  getDirectories({getState,setState}: StateContext<DirectoriesStateModel>){
    return forkJoin([this.directoryService.fetchSeniorities(),
      this.directoryService.fetchLocations()]).pipe(
      tap(([seniorities,locations]: any)=>{
      const state = getState();
      setState({
        ...state,
        seniorities: seniorities,
        locations: locations
      })
    }))
  }
}

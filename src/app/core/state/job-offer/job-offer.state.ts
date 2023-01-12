import {JobOffer} from "./job-offer";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {JobOfferService} from "../../services/job-offer.service";
import {tap} from "rxjs";
import {AddJobOffer, DeleteJobOffer, GetJobOffer, GetJobOffers, UpdateJobOffer} from "./job-offer.action";
import {Injectable} from "@angular/core";

export class JobOffersStateModel {
  jobOffers!: JobOffer[];
  jobOffer!: JobOffer | null;
}
@State<JobOffersStateModel>({
  name: 'jobOffers',
  defaults: {
    jobOffers: [],
    jobOffer: null
  }
})
@Injectable()
export class JobOfferState {
  constructor(private jobOffer: JobOfferService) {
  }

  @Selector()
  static getJobOfferList(state: JobOffersStateModel){
    return state.jobOffers
  }

  @Selector()
  static getJobOffer(state: JobOffersStateModel){
    return state.jobOffer
  }

  @Action(GetJobOffer)
  getJobOffer({getState,setState}: StateContext<JobOffersStateModel>,{ id }: JobOffer){
    return this.jobOffer.fetchJobOfferService(id).pipe(tap((result)=>{
      const state = getState();
      setState({
        ...state,
        jobOffer: result
      })
    }))
  }

  @Action(GetJobOffers)
  getJobOffers({getState,setState}: StateContext<JobOffersStateModel>){
    return this.jobOffer.fetchJobOffersService().pipe(tap((result)=>{
      const state = getState();
      setState({
        ...state,
        jobOffers: result
      })
    }))
  }

  @Action(AddJobOffer)
  addJobOffer({getState,patchState}: StateContext<JobOffersStateModel>, { payload }: AddJobOffer){
    return this.jobOffer.addJobOffer(payload).pipe(tap((result)=>{
      const state = getState();
      patchState({
        jobOffers: [...state.jobOffers, result]
      })
    }))
  }

  @Action(UpdateJobOffer)
  updateJobOffer({getState, setState}: StateContext<JobOffersStateModel>, {payload, id}: UpdateJobOffer){
    return this.jobOffer.updateJobOffer(payload, id).pipe(tap(result=>{
      const state = getState();
      const jobOfferList = [...state.jobOffers];
      const jobOfferIndex = jobOfferList.findIndex(item => item.id === id);
      jobOfferList[jobOfferIndex] = result;
      setState({
        ...state,
        jobOffers: jobOfferList
      })
    }))
  }

  @Action(DeleteJobOffer)
  deleteJobOffer({getState, setState}: StateContext<JobOffersStateModel>, {id}:DeleteJobOffer){
    return this.jobOffer.deleteJobOffer(id).pipe(tap(()=>{
      const state = getState();
      const jobOffers = state.jobOffers.filter(item => item.id !== id)
      setState({
        ...state,
        jobOffers:jobOffers,
      })
    }))
  }
}

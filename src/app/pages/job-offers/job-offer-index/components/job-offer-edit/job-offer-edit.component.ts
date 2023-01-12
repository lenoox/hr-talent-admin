import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../../../../core/state/job-offer/job-offer.state";
import {Observable, Subscription} from "rxjs";
import {JobOffer} from "../../../../../core/state/job-offer/job-offer";
import {ActivatedRoute} from "@angular/router";
import {AddJobOffer, DeleteJobOffer, GetJobOffer, UpdateJobOffer} from "../../../../../core/state/job-offer/job-offer.action";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Seniority} from "../../../../../core/state/seniority";
import {Location} from "../../../../../core/state/location";

@Component({
  selector: 'app-job-offer-edit',
  templateUrl: './job-offer-edit.component.html',
  styleUrls: ['./job-offer-edit.component.scss']
})
export class JobOfferEditComponent implements OnInit {
  @Select(JobOfferState.getJobOffer)
  jobOffer$!: Observable<JobOffer>

  jobOffer!: JobOffer
  routeId!: Subscription;
  id: string = '';
  isEditMode: boolean = false;
  jobOfferForm = this._formBuilder.group({
    position: ['',Validators.required],
    offerDescription: ['',Validators.required],
    seniorities:  this._formBuilder.group({
      id: ['',Validators.required]
    }),
    locations: this._formBuilder.group({
      id: ['',Validators.required]
    }),
  });
  constructor(private _formBuilder: FormBuilder,
              private store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(params => {
      if(params['state'] === 'edit'){
        this.isEditMode = true;
        this.store.dispatch(new GetJobOffer(params['id']))
        this.id = params['id'];
      }else{
        this.isEditMode = false;
      }
    });
    this.jobOffer$.subscribe((jobOffer: any)=>{
      this.jobOfferForm.patchValue(jobOffer);
    })
  }

  ngOnDestroy() {
    this.routeId.unsubscribe()
  }

  get position(){
    return this.jobOfferForm.get('position')
  }

  get offerDescription(){
    return this.jobOfferForm.get('offerDescription')
  }

  get seniorities(){
    return this.jobOfferForm.get('seniorities')
  }

  get locations(){
    return this.jobOfferForm.get('locations')
  }

  add(jobOffer: JobOffer) {
    this.store.dispatch(new AddJobOffer(jobOffer))
  }

  delete(id: string) {
    this.store.dispatch(new DeleteJobOffer(id))
  }

  onSubmit(data: any) {
    this.store.dispatch(new UpdateJobOffer(data,this.id))
  }
}

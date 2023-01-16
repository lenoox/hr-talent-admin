import { Component, OnInit } from '@angular/core';
import { GetJobOffer } from "../../../../../core/state/job-offer/job-offer.action";
import { Select, Store } from "@ngxs/store";
import {JobOfferResponse} from "../../../../../core/state/job-offer/job-offer";
import {JobOfferState} from "../../../../../core/state/job-offer/job-offer.state";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-offer-details',
  templateUrl: './job-offer-details.component.html',
  styleUrls: ['./job-offer-details.component.scss']
})
export class JobOfferDetailsComponent implements OnInit {

  @Select(JobOfferState.getJobOffer)
  jobOffer$!: Observable<JobOfferResponse>

  jobOffer!: JobOfferResponse
  routeId!: Subscription;
  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(params => {
      this.store.dispatch(new GetJobOffer(params['id']))
    });
    this.jobOffer$.subscribe((jobOffer)=>{
      this.jobOffer=jobOffer;
    })
  }

  ngOnDestroy() {
    this.routeId.unsubscribe()
  }

}

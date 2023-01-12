import { Component, OnInit } from '@angular/core';
import {JobOfferState} from "../../../core/state/job-offer/job-offer.state";
import {Observable} from "rxjs";
import {JobOffer} from "../../../core/state/job-offer/job-offer";
import {Select, Store} from "@ngxs/store";
import {GetJobOffers} from "../../../core/state/job-offer/job-offer.action";

@Component({
  selector: 'app-job-offers-index',
  templateUrl: './job-offers-index.component.html',
  styleUrls: ['./job-offers-index.component.scss']
})
export class JobOffersIndexComponent implements OnInit {
  @Select(JobOfferState.getJobOfferList) jobOffers$!: Observable<JobOffer[]>
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetJobOffers())
  }

}

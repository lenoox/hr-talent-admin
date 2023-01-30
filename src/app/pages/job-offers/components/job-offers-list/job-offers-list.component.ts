import {Component, OnInit} from '@angular/core';
import {JobOfferResponse, Paginated} from "../../../../core/state/job-offer/job-offer";
import {mergeMap, Observable, tap} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../../../core/state/job-offer/job-offer.state";
import {DeleteJobOffer, GetJobOffers} from "../../../../core/state/job-offer/job-offer.action";

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss']
})
export class JobOffersListComponent implements OnInit {
  @Select(JobOfferState.getJobOfferList) jobOffers$!: Observable<Paginated<JobOfferResponse[]>>
  columnHeader = {
    nr: 'nr',
    position: 'position',
    seniorities: 'seniorities',
    locations: 'locations',
    actions: 'actions',
  };
  pageSize = 5;
  currentPage = 0;
  constructor(private store:Store) {
  }

  ngOnInit(): void {
    this.loadJobOffers();
  }



  pageChanged() {
    this.loadJobOffers();
  }

  deleteChanged(id:string) {
    this.store.dispatch(new DeleteJobOffer(id));
  }

  loadJobOffers() {
    return this.store.dispatch(new GetJobOffers(this.pageSize,this.currentPage))
  }
}


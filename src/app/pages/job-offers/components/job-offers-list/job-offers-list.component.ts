import {Component, OnInit} from '@angular/core';
import {JobOfferResponse} from "../../../../core/state/job-offer/job-offer";
import {Observable} from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../../../core/state/job-offer/job-offer.state";
import {DeleteJobOffer, GetJobOffers} from "../../../../core/state/job-offer/job-offer.action";

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss']
})
export class JobOffersListComponent implements OnInit {
  displayedColumns: string[] = ['nr','position', 'seniorities', 'locations','action'];
  @Select(JobOfferState.getJobOfferList) jobOffers$!: Observable<JobOfferResponse[]>
  jobOffersDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetJobOffers())
    this.jobOffers$.subscribe((jobOffers)=>{
      this.jobOffersDataSource = new MatTableDataSource<any>(jobOffers)
    })
  }

  delete(id: string) {
    this.store.dispatch(new DeleteJobOffer(id))
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from "../../../../../core/state/job-offer/job-offer";
import {Observable} from "rxjs";
import {CdkTableDataSourceInput} from "@angular/cdk/table";
import {DataSource} from "@angular/cdk/collections";
import { MatTableDataSource } from '@angular/material/table';
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../../../../core/state/job-offer/job-offer.state";
import {DeleteJobOffer, GetJobOffers, UpdateJobOffer} from "../../../../../core/state/job-offer/job-offer.action";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss']
})
export class JobOffersListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  @Select(JobOfferState.getJobOfferList) jobOffers$!: Observable<JobOffer[]>
  jobOffersDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.jobOffers$.subscribe((jobOffers)=>{
      this.jobOffersDataSource = new MatTableDataSource<any>(jobOffers)
    })
  }

  delete(id: string) {
    this.store.dispatch(new DeleteJobOffer(id))
  }
}

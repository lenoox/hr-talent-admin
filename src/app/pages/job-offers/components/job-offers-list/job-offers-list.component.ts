import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {JobOfferResponse, Paginated} from "../../../../core/state/job-offer/job-offer";
import {Observable} from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../../../core/state/job-offer/job-offer.state";
import {DeleteJobOffer, GetJobOffers} from "../../../../core/state/job-offer/job-offer.action";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss']
})
export class JobOffersListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nr','position', 'seniorities', 'locations','action'];
  @Select(JobOfferState.getJobOfferList) jobOffers$!: Observable<Paginated<JobOfferResponse[]>>
  jobOffersDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  constructor(private store:Store) { }

  ngAfterViewInit() {
    this.jobOffersDataSource.paginator = this.paginator;
  }
  loadJobOffers() {
    this.store.dispatch(new GetJobOffers(this.pageSize, this.currentPage))
  }

  ngOnInit(): void {
    this.loadJobOffers();
    this.jobOffers$.subscribe((jobOffers)=>{
      this.jobOffersDataSource = new MatTableDataSource<any>(jobOffers.items)
      this.paginator.pageIndex = this.currentPage;
      this.paginator.length = jobOffers.meta.totalItems;
    })
  }

  delete(id: string) {
    this.store.dispatch(new DeleteJobOffer(id))
    this.loadJobOffers()
  }
  pageChanged(event: PageEvent) {
    console.log({event});
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadJobOffers();
  }

}


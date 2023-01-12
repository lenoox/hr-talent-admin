import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../../core/state/job-offer/job-offer.state";
import {Observable, Subscription} from "rxjs";
import {JobOffer} from "../../../core/state/job-offer/job-offer";
import {GetJobOffer} from "../../../core/state/job-offer/job-offer.action";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-offer-index',
  templateUrl: './job-offer-index.component.html',
  styleUrls: ['./job-offer-index.component.scss']
})
export class JobOfferIndexComponent implements OnInit {

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}

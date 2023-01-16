import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
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

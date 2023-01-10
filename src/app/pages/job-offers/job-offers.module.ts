import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobOffersIndexModule} from "./job-offers-index/job-offers-index.module";
import {JobOfferIndexModule} from "./job-offer-index/job-offer-index.module";
import {JobOffersRoutingModule} from "./job-offers-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobOffersRoutingModule,
    JobOfferIndexModule,
    JobOffersIndexModule,
  ]
})
export class JobOffersModule { }

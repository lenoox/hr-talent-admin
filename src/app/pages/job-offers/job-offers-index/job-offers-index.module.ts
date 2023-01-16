import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersIndexRoutingModule } from './job-offers-index-routing.module';
import { JobOffersIndexComponent } from './job-offers-index.component';
import { JobOffersListComponent } from './components/job-offers-list/job-offers-list.component';
import {SharedModule} from "../../../shared/shared.module";
import {NgxsModule} from "@ngxs/store";
import {JobOfferState} from "../../../core/state/job-offer/job-offer.state";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    JobOffersIndexComponent,
    JobOffersListComponent
  ],
  imports: [
    CommonModule,
    JobOffersIndexRoutingModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class JobOffersIndexModule { }

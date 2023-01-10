import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferIndexRoutingModule } from './job-offer-index-routing.module';
import { JobOfferIndexComponent } from './job-offer-index.component';
import {JobOfferDetailsComponent} from "./components/job-offer-details/job-offer-details.component";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    JobOfferIndexComponent,
    JobOfferDetailsComponent
  ],
  imports: [
    CommonModule,
    JobOfferIndexRoutingModule,
    SharedModule
  ]
})
export class JobOfferIndexModule { }

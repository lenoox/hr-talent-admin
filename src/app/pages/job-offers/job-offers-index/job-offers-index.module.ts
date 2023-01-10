import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersIndexRoutingModule } from './job-offers-index-routing.module';
import { JobOffersIndexComponent } from './job-offers-index.component';
import { JobOffersListComponent } from './components/job-offers-list/job-offers-list.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    JobOffersIndexComponent,
    JobOffersListComponent
  ],
  imports: [
    CommonModule,
    JobOffersIndexRoutingModule,
    SharedModule
  ]
})
export class JobOffersIndexModule { }

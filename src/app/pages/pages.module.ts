import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { JobOffersModule } from "./job-offers/job-offers.module";
import { CandidatesModule } from "./candidates/candidates.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    JobOffersModule,
    CandidatesModule
  ]
})
export class PagesModule { }

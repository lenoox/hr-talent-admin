import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {CoreModule} from "../../core/core.module";
import {JobOffersModule} from "../job-offers/job-offers.module";
import {CandidatesModule} from "../candidates/candidates.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLinkWithHref,
    JobOffersModule,
    CandidatesModule,

  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {JobOfferService} from "./services/job-offer.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {JobOfferState} from "./state/job-offer/job-offer.state";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    HttpClientModule,
  ],
  exports: [
    SidebarModule
  ],
  providers:[JobOfferService]
})
export class CoreModule { }

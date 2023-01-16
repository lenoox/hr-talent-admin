import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {JobOfferService} from "./services/job-offer.service";
import {HttpClientModule} from "@angular/common/http";
import {DirectoryService} from "./services/directory.service";
import {NotificationService} from "./services/notification.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    HttpClientModule
  ],
  exports: [
    SidebarModule
  ],
  providers:[JobOfferService,DirectoryService,NotificationService]
})
export class CoreModule { }

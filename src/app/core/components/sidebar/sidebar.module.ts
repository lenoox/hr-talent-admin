import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLinkWithHref,
  ]
})
export class SidebarModule { }

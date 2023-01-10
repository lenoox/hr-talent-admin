import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from "./components/sidebar/sidebar.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [
    SidebarModule
  ]
})
export class CoreModule { }

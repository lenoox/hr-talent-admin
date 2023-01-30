import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material.module";
import { PageContainerComponent } from './components/page-container/page-container.component';
import {TableComponent} from "./components/job-offers-list/table.component";
import {RouterLink} from "@angular/router";

const components = [
  PageContainerComponent,
  TableComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink
  ],
  exports: [
    AngularMaterialModule,
    ...components
  ]
})
export class SharedModule { }

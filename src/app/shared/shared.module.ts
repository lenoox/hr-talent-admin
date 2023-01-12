import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material.module";
import { PageContainerComponent } from './components/page-container/page-container.component';

const components = [
  PageContainerComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    ...components
  ]
})
export class SharedModule { }

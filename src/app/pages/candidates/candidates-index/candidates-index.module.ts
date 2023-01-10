import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesIndexRoutingModule } from './candidates-index-routing.module';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { CandidatesIndexComponent } from './candidates-index.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidatesIndexComponent
  ],
  imports: [
    CommonModule,
    CandidatesIndexRoutingModule,
    SharedModule
  ]
})
export class CandidatesIndexModule { }

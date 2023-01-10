import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateIndexRoutingModule } from './candidate-index-routing.module';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';
import { CandidateIndexComponent } from "./candidate-index.component";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    CandidateIndexComponent,
    CandidateDetailsComponent
  ],
  imports: [
    CommonModule,
    CandidateIndexRoutingModule,
    SharedModule
  ]
})
export class CandidateIndexModule { }

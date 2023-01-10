import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import {CandidateIndexModule} from "./candidate-index/candidate-index.module";
import {CandidatesIndexModule} from "./candidates-index/candidates-index.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    CandidateIndexModule,
    CandidatesIndexModule
  ]
})
export class CandidatesModule { }

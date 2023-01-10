import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CandidatesIndexComponent} from "./candidates-index.component";

const routes: Routes = [{
    path: 'candidates',
    component: CandidatesIndexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesIndexRoutingModule { }

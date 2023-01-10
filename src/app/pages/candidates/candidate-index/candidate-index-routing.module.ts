import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateIndexComponent } from "./candidate-index.component";

const routes: Routes = [{
    path: 'candidate/:id',
    component: CandidateIndexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateIndexRoutingModule { }

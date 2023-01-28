import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CandidateDetailsComponent} from "./components/candidate-details/candidate-details.component";
import {CandidatesListComponent} from "./components/candidates-list/candidates-list.component";
import {CandidatesComponent} from "./candidates.component";

const routes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
    children:[
     {
       path: '',
       component:CandidatesListComponent
     },
     {
       path: ':id',
       component:CandidateDetailsComponent
     }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }

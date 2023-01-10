import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOffersIndexComponent} from "./job-offers-index.component";

const routes: Routes = [{
  path: 'job-offers',
  component: JobOffersIndexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOffersIndexRoutingModule { }

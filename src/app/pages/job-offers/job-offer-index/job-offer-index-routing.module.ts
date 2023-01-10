import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOfferIndexComponent} from "./job-offer-index.component";

const routes: Routes = [{
  path: 'job-offer/:id',
  component: JobOfferIndexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOfferIndexRoutingModule { }

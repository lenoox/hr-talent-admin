import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOfferIndexComponent} from "./job-offer-index.component";
import {JobOfferDetailsComponent} from "./components/job-offer-details/job-offer-details.component";
import {JobOfferEditComponent} from "./components/job-offer-edit/job-offer-edit.component";

const routes: Routes = [{
  path: 'job-offer',
  component: JobOfferIndexComponent,
  children:[

    {
      path:'details/:id',
      component: JobOfferDetailsComponent
    },
    {
      path:':state/:id',
      component: JobOfferEditComponent
    },
    {
      path:':state',
      component: JobOfferEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOfferIndexRoutingModule { }

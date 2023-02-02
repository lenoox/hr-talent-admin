import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobOfferDetailsComponent} from "./components/job-offer-details/job-offer-details.component";
import {JobOfferEditComponent} from "./components/job-offer-edit/job-offer-edit.component";
import {JobOffersComponent} from "./job-offers.component";
import {JobOffersListComponent} from "./components/job-offers-list/job-offers-list.component";

const routes: Routes = [{
  path: '',
  component: JobOffersComponent,
  runGuardsAndResolvers: 'always',
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
    },
    {
      path: '',
      component: JobOffersListComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOffersRoutingModule { }

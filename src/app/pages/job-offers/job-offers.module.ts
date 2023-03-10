import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersRoutingModule } from './job-offers-routing.module';
import { JobOffersComponent } from './job-offers.component';
import { JobOffersListComponent } from './components/job-offers-list/job-offers-list.component';
import { JobOfferEditComponent } from './components/job-offer-edit/job-offer-edit.component';
import { JobOfferDetailsComponent } from './components/job-offer-details/job-offer-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  JobOffersComponent,
  JobOffersListComponent,
  JobOfferEditComponent,
  JobOfferDetailsComponent,
];
const MODULES = [
  CommonModule,
  JobOffersRoutingModule,
  SharedModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class JobOffersModule {}

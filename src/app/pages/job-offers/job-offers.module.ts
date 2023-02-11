import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersRoutingModule } from './job-offers-routing.module';
import { JobOffersComponent } from './job-offers.component';
import { JobOffersListComponent } from './components/job-offers-list/job-offers-list.component';
import { JobOfferEditComponent } from './components/job-offer-edit/job-offer-edit.component';
import { JobOfferDetailsComponent } from './components/job-offer-details/job-offer-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobOffersComponent,
    JobOffersListComponent,
    JobOfferEditComponent,
    JobOfferDetailsComponent,
  ],
  imports: [
    CommonModule,
    JobOffersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class JobOffersModule {}

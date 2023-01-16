import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferIndexRoutingModule } from './job-offer-index-routing.module';
import { JobOfferIndexComponent } from './job-offer-index.component';
import {JobOfferDetailsComponent} from "./components/job-offer-details/job-offer-details.component";
import {SharedModule} from "../../../shared/shared.module";
import { JobOfferEditComponent } from './components/job-offer-edit/job-offer-edit.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    JobOfferIndexComponent,
    JobOfferDetailsComponent,
    JobOfferEditComponent
  ],
  imports: [
    CommonModule,
    JobOfferIndexRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class JobOfferIndexModule { }

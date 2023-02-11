import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CandidatesComponent,
    CandidateDetailsComponent,
    CandidatesListComponent,
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CandidatesModule {}

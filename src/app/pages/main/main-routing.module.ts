import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'candidates', pathMatch: 'full' },
      {
        path: 'job-offers',
        loadChildren: () =>
          import('../job-offers/job-offers.module').then(
            m => m.JobOffersModule
          ),
      },
      {
        path: 'candidates',
        loadChildren: () =>
          import('../candidates/candidates.module').then(
            m => m.CandidatesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

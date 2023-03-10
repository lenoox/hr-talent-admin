import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoreModule } from '../../core/core.module';
import { JobOffersModule } from '../job-offers/job-offers.module';
import { CandidatesModule } from '../candidates/candidates.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

const COMPONENTS = [MainComponent];
const MODULES = [
  CommonModule,
  MainRoutingModule,
  CoreModule,
  MatSidenavModule,
  RouterOutlet,
  RouterLinkWithHref,
  JobOffersModule,
  CandidatesModule,
];
@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES],
})
export class MainModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { JobOfferState } from './core/state/job-offer/job-offer.state';
import { DirectoryState } from './core/state/directory/directory.state';
import { UserState } from './core/state/user/user.state';
import { CandidateState } from './core/state/candidate/candidate.state';

const STATES = [JobOfferState, CandidateState, DirectoryState, UserState];
const COMPONENTS = [AppComponent];
const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  NgxsModule.forRoot([...STATES]),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot(),
  CoreModule,
  PagesModule,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [],
  providers: [],
  bootstrap: [COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

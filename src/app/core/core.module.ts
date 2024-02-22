import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferService } from './services/job-offer.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DirectoryService } from './services/directory.service';
import { NotificationService } from './services/notification.service';
import { TokenInterceptor } from './interceptor/token-interceptor';

const MODULES = [CommonModule, HttpClientModule];
const SERVICES = [
  JobOfferService,
  DirectoryService,
  NotificationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
];
@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [...SERVICES],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    SharedModule,
  ],
})
export class SidebarModule {}

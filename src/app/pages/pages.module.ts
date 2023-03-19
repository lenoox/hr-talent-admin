import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { AboutModule } from './about/about.module';

const MODULES = [
  CommonModule,
  PagesRoutingModule,
  MainModule,
  LoginModule,
  AboutModule,
];
@NgModule({
  declarations: [],
  imports: [...MODULES],
})
export class PagesModule {}

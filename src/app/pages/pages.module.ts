import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';

const MODULES = [CommonModule, PagesRoutingModule, MainModule, LoginModule];
@NgModule({
  declarations: [],
  imports: [...MODULES],
})
export class PagesModule {}

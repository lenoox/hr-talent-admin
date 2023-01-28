import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TwoFactorEnabledComponent } from './two-factor-enabled/two-factor-enabled.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { LoginIndexComponent } from './login-index.component';


@NgModule({
  declarations: [
    LoginIndexComponent,
    LoginComponent,
    TwoFactorEnabledComponent,
    TwoFactorAuthenticationComponent
  ],
    imports: [
      CommonModule,
      LoginRoutingModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule
    ]
})
export class LoginModule { }

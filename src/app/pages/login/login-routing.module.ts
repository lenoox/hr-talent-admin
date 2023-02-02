import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginIndexComponent} from "./login-index.component";
import {LoginComponent} from "./login/login.component";
import {TwoFactorEnabledComponent} from "./two-factor-enabled/two-factor-enabled.component";
import {TwoFactorAuthenticationComponent} from "./two-factor-authentication/two-factor-authentication.component";

const routes: Routes = [
  {
    path: '',
    component: LoginIndexComponent,
    children:[
      {
        path: 'user',
        component: LoginComponent,
      },
      {
        path: '2fa',
        component: TwoFactorEnabledComponent,
      },
      {
        path: 'code',
        component: TwoFactorAuthenticationComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

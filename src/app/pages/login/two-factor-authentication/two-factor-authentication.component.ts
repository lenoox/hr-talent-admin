import { Component, OnInit } from '@angular/core';
import {TwoFactorAuthenticateRequest} from "../../../core/state/user/user";
import {TwoFactorAuthenticate} from "../../../core/state/user/user.action";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.component.html',
  styleUrls: ['./two-factor-authentication.component.scss']
})
export class TwoFactorAuthenticationComponent implements OnInit {
  checked = false;
  code = '';
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }
  twoFactorAuthenticate(code: string) {
    let user2FARequest = new TwoFactorAuthenticateRequest(code);
    this.store.dispatch(new TwoFactorAuthenticate(user2FARequest)).subscribe(()=>{
      this.router.navigate(['/candidates'])
    })
  }
}

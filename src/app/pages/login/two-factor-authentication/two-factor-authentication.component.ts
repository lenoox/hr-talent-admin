import { Component } from '@angular/core';
import { TwoFactorAuthenticateRequest } from '../../../core/state/user/user';
import { TwoFactorAuthenticate } from '../../../core/state/user/user.action';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.component.html',
  styleUrls: ['./two-factor-authentication.component.scss'],
})
export class TwoFactorAuthenticationComponent {
  checked = false;
  code = '';
  constructor(private store: Store, private router: Router) {}

  twoFactorAuthenticate(code: string) {
    let user2FARequest = new TwoFactorAuthenticateRequest(code);
    this.store
      .dispatch(new TwoFactorAuthenticate(user2FARequest))
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.router.navigate(['/candidates']);
      });
  }
}

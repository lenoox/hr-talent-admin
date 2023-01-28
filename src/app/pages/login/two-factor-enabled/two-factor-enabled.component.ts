import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../core/services/user.service";
import { DomSanitizer } from "@angular/platform-browser";
import { TurnOn2faRequest } from "../../../core/state/user/user";
import { Store } from "@ngxs/store";
import {Router} from "@angular/router";
import {TurnOn2fa} from "../../../core/state/user/user.action";

@Component({
  selector: 'app-two-factor-enabled',
  templateUrl: './two-factor-enabled.component.html',
  styleUrls: ['./two-factor-enabled.component.scss']
})
export class TwoFactorEnabledComponent implements OnInit {
  qrImage:any;
  checked = false;
  code = '';
  enabled2fa: any;

  constructor(private userService: UserService,
              private sanitizer: DomSanitizer,
              private store: Store,
              private router:Router) { }

  ngOnInit(): void {

  }
  turnOn2fa(code: string) {
    let user2FARequest = new TurnOn2faRequest(code);
    this.store.dispatch(new TurnOn2fa(user2FARequest)).subscribe(()=>{
      this.router.navigate(['/code'])
    })
  }
  generate() {
    this.userService.generateQr().subscribe((response)=>{
      this.qrImage=this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(response));
      this.enabled2fa = !this.enabled2fa;
    })
  }

  redirectTo2fa() {
    this.router.navigate(['/code'])
  }
}

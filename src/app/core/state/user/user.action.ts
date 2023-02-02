import {TurnOn2faRequest, TwoFactorAuthenticateRequest, UserRequest} from "./user";

export class GetUser {
  static readonly type = '[LogInUser] Get User'
}
export class LogInUser {
  static readonly type = '[LogInUser] LogIn'
  constructor(public payload: UserRequest) {
  }
}
export class TurnOn2fa {
  static readonly type = '[User2FA] TurnOn 2fa';
  constructor(public payload: TurnOn2faRequest) {
  }
}
export class TwoFactorAuthenticate {
  static readonly type = '[User2FA] Two Factor Authenticate';
  constructor(public payload: TwoFactorAuthenticateRequest) {
  }
}

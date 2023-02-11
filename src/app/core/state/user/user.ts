export interface UserRequest {
  email: string;
  password: string;
}
export class TwoFactorAuthenticateRequest {
  constructor(public twoFactorAuthenticationCode: string) {}
}
export class TurnOn2faRequest {
  constructor(public twoFactorAuthenticationCode: string) {}
}
export interface UserResponse {
  email: string;
  firstName: string;
  lastName: string;
  twoFactorAuthenticationSecret: string;
  isTwoFactorAuthenticationEnabled: string;
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TurnOn2faRequest, TwoFactorAuthenticateRequest, UserRequest, UserResponse} from "../state/user/user";
const httpOptions = { withCredentials: true };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  jobOffer = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  loginUser(data:UserRequest) {
    return this.http.post<UserResponse>(`${this.jobOffer}/authentication/log-in`,data,httpOptions);
  }

  generateQr() {
     return this.http.post(`${this.jobOffer}/2fa/generate`, {}, {
        responseType: 'blob',
      });
  }
  twoFactorAuthenticate(data:TwoFactorAuthenticateRequest) {
    return this.http.post<UserResponse>(`${this.jobOffer}/2fa/authenticate`,data);
  }
  turnOn2fa(data:TurnOn2faRequest) {
    return this.http.post<UserResponse>(`${this.jobOffer}/2fa/turn-on`,data);
  }
  refreshToken() {
    return this.http.get<UserResponse>(`${this.jobOffer}/authentication/refresh`);
  }
}

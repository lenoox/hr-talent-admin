import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  TurnOn2faRequest,
  TwoFactorAuthenticateRequest,
  UserRequest,
  UserResponse,
} from '../state/user/user';
import { environment } from '../../../environments/environment';
const httpOptions = { withCredentials: true };
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(data: UserRequest) {
    return this.http.post<UserResponse>(
      `${environment.apiUrl}/authentication/log-in`,
      data,
      httpOptions
    );
  }

  generateQr() {
    return this.http.post(
      `${environment.apiUrl}/2fa/generate`,
      {},
      {
        responseType: 'blob',
      }
    );
  }
  twoFactorAuthenticate(data: TwoFactorAuthenticateRequest) {
    return this.http.post<UserResponse>(
      `${environment.apiUrl}/2fa/authenticate`,
      data
    );
  }
  turnOn2fa(data: TurnOn2faRequest) {
    return this.http.post<UserResponse>(
      `${environment.apiUrl}/2fa/turn-on`,
      data
    );
  }
  refreshToken() {
    return this.http.get<UserResponse>(
      `${environment.apiUrl}/authentication/refresh`
    );
  }

  getUser() {
    return this.http.get<UserResponse>(`${environment.apiUrl}/authentication`);
  }
}

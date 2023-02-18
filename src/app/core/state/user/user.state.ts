import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  GetUser,
  LogInUser,
  Logout,
  Reset,
  TurnOn2fa,
  TwoFactorAuthenticate,
} from './user.action';
import { UserService } from '../../services/user.service';
import { UserResponse } from './user';
import { Router } from '@angular/router';

export class UserStateModel {
  user!: UserResponse | null;
  loggedUser!: UserResponse | null;
  isLogged!: boolean;
}
@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
    loggedUser: null,
    isLogged: false,
  },
})
@Injectable()
export class UserState {
  constructor(private userService: UserService, private router: Router) {}

  @Selector()
  static getUser(state: UserStateModel) {
    return state.user;
  }

  @Selector()
  static getLoggedUser(state: UserStateModel) {
    return state.loggedUser;
  }

  @Selector()
  static isLogged(state: UserStateModel) {
    return state.isLogged;
  }

  @Action(LogInUser)
  getToken(
    { getState, setState }: StateContext<UserStateModel>,
    { payload }: LogInUser
  ) {
    return this.userService.loginUser(payload).pipe(
      tap((result: UserResponse) => {
        const state = getState();
        setState({
          ...state,
          loggedUser: result,
          isLogged: !!result?.email,
        });
      })
    );
  }
  @Action(GetUser)
  getUser({ getState, setState }: StateContext<UserStateModel>) {
    return this.userService.getUser().pipe(
      tap((result: UserResponse) => {
        const state = getState();
        setState({
          ...state,
          loggedUser: result,
          isLogged: !!result?.email,
        });
      })
    );
  }

  @Action(TurnOn2fa)
  turnOn2fa(
    { getState, setState }: StateContext<UserStateModel>,
    { payload }: TurnOn2fa
  ) {
    return this.userService.turnOn2fa(payload);
  }
  @Action(TwoFactorAuthenticate)
  twoFactorAuthenticate(
    { getState, setState }: StateContext<UserStateModel>,
    { payload }: TwoFactorAuthenticate
  ) {
    return this.userService.twoFactorAuthenticate(payload).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          loggedUser: result,
          isLogged: !!result.email,
        });
      })
    );
  }

  @Action(Logout)
  logout({ getState, setState }: StateContext<UserStateModel>) {
    return this.userService.logout().pipe(
      tap(result => {
        setState({
          user: null,
          loggedUser: null,
          isLogged: false,
        });
      })
    );
  }
  @Action(Reset)
  reset({ getState, setState }: StateContext<UserStateModel>) {
    setState({
      user: null,
      loggedUser: null,
      isLogged: false,
    });
  }
}

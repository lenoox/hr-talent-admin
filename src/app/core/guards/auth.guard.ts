import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { catchError, Observable, of, map } from 'rxjs';
import { UserState } from '../state/user/user.state';
import { GetUser, Reset } from '../state/user/user.action';
import { UserResponse } from '../state/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(UserState.isLogged) isLogged$!: Observable<boolean>;
  @Select(UserState.getLoggedUser) loggedUser$!: Observable<UserResponse>;
  constructor(private router: Router, private store: Store) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.dispatch(new GetUser()).pipe(catchError(error => of(null)));
    return this.loggedUser$.pipe(
      map(loggedUser => {
        return this.isLogged(!!loggedUser?.email);
      })
    );
  }
  isLogged(isLogged: boolean): boolean {
    if (isLogged) {
      return true;
    } else {
      this.router.navigateByUrl('/login/user');
      return false;
    }
  }
}

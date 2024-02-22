import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { UserState } from '../state/user/user.state';
import { GetUser } from '../state/user/user.action';
import { UserResponse } from '../state/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(UserState.isLogged) isLogged$: Observable<boolean>;
  @Select(UserState.getLoggedUser) loggedUser$: Observable<UserResponse>;
  constructor(private router: Router, private store: Store) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.store.dispatch(new GetUser()).pipe(
      switchMap(() => this.checkIfLogged()),
      catchError(() => this.checkIfLogged())
    );
  }
  checkIfLogged(): Observable<boolean | UrlTree> {
    return this.store.select(UserState.isLogged).pipe(
      map(isLogged => {
        if (isLogged) {
          return true;
        } else {
          return this.router.createUrlTree(['/login/user']);
        }
      })
    );
  }
}

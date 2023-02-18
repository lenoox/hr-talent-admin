import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { catchError, mergeMap, Observable, of, tap } from 'rxjs';
import { UserState } from '../state/user/user.state';
import { GetUser, Reset } from '../state/user/user.action';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(UserState.isLogged) userState$!: Observable<boolean>;
  constructor(private router: Router, private store: Store) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.dispatch(new GetUser()).pipe(
      catchError(() => {
        this.store.dispatch(new Reset());
        return this.isLogged(false);
      }),
      mergeMap((isLogged: boolean) => {
        return this.isLogged(isLogged);
      })
    );
  }
  redirect(): Observable<boolean> {
    this.router.navigate(['/login/user']);
    return of(false);
  }
  isLogged(isLogged: boolean): Observable<boolean> {
    if (isLogged) {
      return of(true);
    } else {
      return this.redirect();
    }
  }
}

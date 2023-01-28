import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Select} from "@ngxs/store";
import {Observable, tap} from "rxjs";
import {UserState} from "../state/user/user.state";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  @Select(UserState.isLogged) userState$!: Observable<boolean>;
  constructor(private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userState$.pipe(
      tap((isLogged:boolean)=>{
        if (isLogged){
          return true;
        } else {
          return this.router.navigate(['/login']);
        }
      })
    );
  }
}

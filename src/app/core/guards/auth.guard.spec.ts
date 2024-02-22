import { TestBed } from '@angular/core/testing';

import { cold } from 'jasmine-marbles';

import { NgxsModule, Store } from '@ngxs/store';
import { AuthGuard } from './auth.guard';
import { UserState } from '../state/user/user.state';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Auth Guard', () => {
  let guard: AuthGuard;
  let store: Store;
  let router: Router;
  let httpTestingController: HttpTestingController;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([UserState]),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [AuthGuard],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.returnValue(of(true));
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    // Mock user as logged in
  });

  it('should return false and navigate to login if the user state is not logged in', () => {
    spyOn(store, 'select').and.returnValue(of(false));
    const createUrlTreeSpy = spyOn(router, 'createUrlTree');
    const canActivate = guard
      .canActivate(routeMock, routeStateMock)
      .subscribe(() => {
        expect(createUrlTreeSpy).toHaveBeenCalledWith(['/login/user']);
      });
  });

  it('should return true if the user state is logged in', () => {
    spyOn(store, 'select').and.returnValue(of(true));
    // const canActivate = guard.canActivate(routeMock,routeStateMock);
    const canActivate = guard.canActivate(routeMock, routeStateMock);
    canActivate.subscribe(data => {
      expect(data).toBeTruthy();
    });
    expect(canActivate).toBeObservable(cold('(a|)', { a: true }));
  });
});

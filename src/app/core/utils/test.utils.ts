import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Location } from '@angular/common';

export interface InstanceResponse<T> {
  fixture: ComponentFixture<T>;
  componentInstance: T;
}
export interface MockStore {
  store: any;
  dispatchSpy: any;
}
export function initComponentInstance<T>(component: any): InstanceResponse<T> {
  const fixture = TestBed.createComponent<T>(component);
  const componentInstance = fixture.componentInstance;
  return {
    fixture,
    componentInstance,
  };
}
export function mockStore(): MockStore {
  const store = TestBed.inject(Store);
  const dispatchSpy = spyOn(store, 'dispatch');
  return {
    store,
    dispatchSpy,
  };
}

export function mockRouter(): any {
  return TestBed.inject(Router);
}

export function mockLocation(): any {
  return TestBed.inject(Location);
}

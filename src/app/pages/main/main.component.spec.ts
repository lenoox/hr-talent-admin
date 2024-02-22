import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { NgxsModule, Store } from '@ngxs/store';
import { MockComponent } from 'ng-mocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let store: Store;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent, MockComponent(SidebarComponent)],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([]),
        AngularMaterialModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

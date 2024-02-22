import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferEditComponent } from './job-offer-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mockStore } from '../../../../core/utils/test.utils';
import { NgxsModule } from '@ngxs/store';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

describe('JobOfferEditComponent', () => {
  let component: JobOfferEditComponent;
  let fixture: ComponentFixture<JobOfferEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOfferEditComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatOptionModule,
        MatInputModule,
        RouterTestingModule,
        MatSnackBarModule,
        NgxsModule.forRoot([]),
      ],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(JobOfferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

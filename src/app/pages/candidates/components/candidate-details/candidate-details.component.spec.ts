import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsComponent } from './candidate-details.component';
import { NgxsModule } from '@ngxs/store';
import { mockStore } from '../../../../core/utils/test.utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CandidateDetailsComponent', () => {
  let component: CandidateDetailsComponent;
  let fixture: ComponentFixture<CandidateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateDetailsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatSnackBarModule,
        NgxsModule.forRoot([]),
      ],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(CandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

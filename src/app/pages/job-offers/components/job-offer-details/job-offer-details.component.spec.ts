import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferDetailsComponent } from './job-offer-details.component';
import { mockStore } from '../../../../core/utils/test.utils';
import { NgxsModule } from '@ngxs/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('JobOfferDetailsComponent', () => {
  let component: JobOfferDetailsComponent;
  let fixture: ComponentFixture<JobOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOfferDetailsComponent],
      imports: [NgxsModule.forRoot([]), RouterTestingModule],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(JobOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

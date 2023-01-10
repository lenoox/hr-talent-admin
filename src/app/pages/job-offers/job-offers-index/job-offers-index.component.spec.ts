import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersIndexComponent } from './job-offers-index.component';

describe('JobOffersIndexComponent', () => {
  let component: JobOffersIndexComponent;
  let fixture: ComponentFixture<JobOffersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffersIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOffersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

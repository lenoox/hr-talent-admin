import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersComponent } from './job-offers.component';
import { PageContainerComponent } from '../../shared/components/page-container/page-container.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('JobOffersComponent', () => {
  let component: JobOffersComponent;
  let fixture: ComponentFixture<JobOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOffersComponent, PageContainerComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

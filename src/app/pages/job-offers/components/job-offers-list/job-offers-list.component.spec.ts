import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersListComponent } from './job-offers-list.component';
import { InstanceResponse, mockStore } from '../../../../core/utils/test.utils';
import { NgxsModule } from '@ngxs/store';
import { TableComponent } from '../../../../shared/components/table/table.component';

describe('JobOffersListComponent', () => {
  let component: JobOffersListComponent;
  let instance: InstanceResponse<JobOffersListComponent>;
  let fixture: ComponentFixture<JobOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOffersListComponent, TableComponent],
      imports: [NgxsModule.forRoot([])],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(JobOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

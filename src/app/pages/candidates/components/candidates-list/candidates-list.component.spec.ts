import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesListComponent } from './candidates-list.component';
import { mockStore } from '../../../../core/utils/test.utils';
import { NgxsModule } from '@ngxs/store';
import { TableComponent } from '../../../../shared/components/table/table.component';

describe('CandidatesListComponent', () => {
  let component: CandidatesListComponent;
  let fixture: ComponentFixture<CandidatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatesListComponent, TableComponent],
      imports: [NgxsModule.forRoot([])],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(CandidatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

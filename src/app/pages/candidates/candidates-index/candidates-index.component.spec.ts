import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesIndexComponent } from './candidates-index.component';

describe('CandidatesIndexComponent', () => {
  let component: CandidatesIndexComponent;
  let fixture: ComponentFixture<CandidatesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorEnabledComponent } from './two-factor-enabled.component';
import { mockStore } from '../../../core/utils/test.utils';
import { NgxsModule } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TwoFactorEnabledComponent', () => {
  let component: TwoFactorEnabledComponent;
  let fixture: ComponentFixture<TwoFactorEnabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorEnabledComponent],
      imports: [NgxsModule.forRoot([]), HttpClientTestingModule],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(TwoFactorEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

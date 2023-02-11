import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorEnabledComponent } from './two-factor-enabled.component';

describe('TwoFactorEnabledComponent', () => {
  let component: TwoFactorEnabledComponent;
  let fixture: ComponentFixture<TwoFactorEnabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorEnabledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoFactorEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

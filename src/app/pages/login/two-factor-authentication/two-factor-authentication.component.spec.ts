import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorAuthenticationComponent } from './two-factor-authentication.component';
import { mockStore } from '../../../core/utils/test.utils';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TwoFactorAuthenticationComponent', () => {
  let component: TwoFactorAuthenticationComponent;
  let fixture: ComponentFixture<TwoFactorAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorAuthenticationComponent],
      imports: [
        NgxsModule.forRoot([]),
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
      ],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(TwoFactorAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

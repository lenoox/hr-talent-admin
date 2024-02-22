import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NgxsModule } from '@ngxs/store';
import { mockStore } from '../../../core/utils/test.utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        NgxsModule.forRoot([]),
      ],
    }).compileComponents();
    const storeMock = mockStore();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Validation email and password if both is correct', () => {
    const emailControl = component.userForm.get('email');
    const passwordControl = component.userForm.get('password');
    emailControl.setValue('jan.kowalski@local');
    passwordControl.setValue('123456');
    fixture.detectChanges();
    expect(component.userForm?.valid).toBe(true);
  });
  const loginValidationTest = [
    { value: null, valid: false },
    { value: undefined, valid: false },
    { value: '', valid: false },
    { value: 'jan.kowalskie@local.pl', valid: true },
  ];
  loginValidationTest.forEach(test => {
    it(`should validate the email address: "${test.value}"`, () => {
      const emailControl = component.userForm.get('email');
      emailControl.setValue(test.value);
      fixture.detectChanges();
      expect(emailControl?.valid).toBe(test.valid);
    });
  });
  const passwordValidationTest = [
    { value: null, valid: false },
    { value: undefined, valid: false },
    { value: '', valid: false },
    { value: '123456', valid: true },
  ];
  passwordValidationTest.forEach(test => {
    it(`should validate the password: "${test.value}"`, () => {
      const emailControl = component.userForm.get('password');
      emailControl.setValue(test.value);
      fixture.detectChanges();
      expect(emailControl?.valid).toBe(test.valid);
    });
  });
});

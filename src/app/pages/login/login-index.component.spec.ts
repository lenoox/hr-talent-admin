import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIndexComponent } from './login-index.component';
import { NgxsModule } from '@ngxs/store';
import { mockStore } from '../../core/utils/test.utils';

describe('LoginIndexComponent', () => {
  let component: LoginIndexComponent;
  let fixture: ComponentFixture<LoginIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginIndexComponent],
      imports: [NgxsModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginIndexComponent);
    const storeMock = mockStore();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { ShortNamePipe } from '../../pipes/short-name.pipe';
import { AngularMaterialModule } from '../../../angular-material.module';
import {
  mockLocation,
  mockRouter,
  mockStore,
} from '../../../core/utils/test.utils';
import { JobOffersComponent } from '../../../pages/job-offers/job-offers.component';
import { CandidatesComponent } from '../../../pages/candidates/candidates.component';
import { AboutComponent } from '../../../pages/about/about.component';
import { UserResponse } from '../../../core/state/user/user';
import { MockPipe } from 'ng-mocks';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let location: Location;
  let router: Router;
  let pipeSpy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent, MockPipe(ShortNamePipe)],
      imports: [
        CommonModule,
        AngularMaterialModule,
        NgxsModule.forRoot([]),
        RouterTestingModule.withRoutes([
          {
            path: 'job-offers',
            component: JobOffersComponent,
          },
          {
            path: 'candidates',
            component: CandidatesComponent,
          },
          {
            path: 'about',
            component: AboutComponent,
          },
        ]),
      ],
    }).compileComponents();
    const storeMock = mockStore();
    pipeSpy = spyOn(ShortNamePipe.prototype, 'transform');
    location = mockLocation();
    router = mockRouter();
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.user = {
      email: 'jan@kowalski.pl',
      firstName: 'Jan',
      lastName: 'Kowalski',
      twoFactorAuthenticationSecret: '',
      isTwoFactorAuthenticationEnabled: '',
    };
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a logo', () => {
    const logoElement = fixture.nativeElement.querySelector(
      '.sidebar-header img'
    );
    expect(logoElement).toBeTruthy();
  });

  it('should render menu items', () => {
    component.menuItems = [
      {
        icon: 'people_outline',
        class: 'candidates',
        routerLink: 'candidates',
        label: 'Kandydaci',
      },
      {
        icon: 'manage_search',
        class: 'job-offers',
        routerLink: 'job-offers',
        label: 'Oferty pracy',
      },
      {
        icon: 'info_outline',
        class: 'about',
        routerLink: 'about',
        label: 'O aplikacji',
      },
    ];
    fixture.detectChanges();

    const menuItems =
      fixture.nativeElement.querySelectorAll('.sidebar-menu-item');
    expect(menuItems.length).toBe(3);

    const menuItemLinks = fixture.debugElement.queryAll(
      By.css('.sidebar-menu-item a')
    );
    expect(menuItemLinks.length).toBe(3);

    expect(menuItemLinks[0].nativeElement.textContent.trim()).toBe('Kandydaci');
    expect(menuItemLinks[1].nativeElement.textContent.trim()).toBe(
      'Oferty pracy'
    );
    expect(menuItemLinks[2].nativeElement.textContent.trim()).toBe(
      'O aplikacji'
    );
  });

  it('should have a test button', fakeAsync(() => {
    const elem = fixture.debugElement;

    const button = elem.query(By.css('.job-offers'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent.trim()).toBe('Oferty pracy');

    button.nativeElement.click();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/job-offers');
    });
  }));

  it('should render user information', () => {
    const user: UserResponse = {
      email: 'jan@kowalski.pl',
      firstName: 'Jan',
      lastName: 'Kowalski',
      twoFactorAuthenticationSecret: '123456',
      isTwoFactorAuthenticationEnabled: '',
    };
    component.user = user;
    fixture.detectChanges();

    const userNameElement = fixture.nativeElement.querySelector('.user-name');
    expect(userNameElement.textContent.trim()).toBe('Jan Kowalski');
  });
});

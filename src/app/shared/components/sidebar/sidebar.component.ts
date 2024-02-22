import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from '../../../core/state/user/user.state';
import { UserResponse } from '../../../core/state/user/user';
import { Router } from '@angular/router';
import { Logout } from '../../../core/state/user/user.action';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: UserResponse | null;
  menuItems = [
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
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(UserState.getLoggedUser);
  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['/login/user']);
  }
}

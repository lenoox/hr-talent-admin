import { Component, OnInit } from '@angular/core';
import { Store} from "@ngxs/store";
import {UserState} from "../../state/user/user.state";
import {UserResponse} from "../../state/user/user";
import {Router} from "@angular/router";
import {LogInUser, Logout} from "../../state/user/user.action";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user!: UserResponse | null;
  constructor(private store: Store,private router: Router) { }

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(UserState.getLoggedUser);
  }

  logout() {
    this.store.dispatch(new Logout())
    this.router.navigate(['/login/user']);

  }
}

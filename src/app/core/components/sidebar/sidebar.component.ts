import { Component, OnInit } from '@angular/core';
import { Store} from "@ngxs/store";
import {UserState} from "../../state/user/user.state";
import {UserResponse} from "../../state/user/user";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user!: UserResponse | null;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(UserState.getLoggedUser);
  }

}

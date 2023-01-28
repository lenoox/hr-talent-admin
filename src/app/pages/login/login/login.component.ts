import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserRequest} from "../../../core/state/user/user";
import {LogInUser} from "../../../core/state/user/user.action";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm:any;
  constructor(private _formBuilder: FormBuilder,
              private store: Store,
              private router: Router) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get email(){
    return this.userForm.get('email')
  }
  get password(){
    return this.userForm.get('password')
  }
  onSubmit(userRequest: UserRequest) {
    this.store.dispatch(new LogInUser(userRequest))
    this.router.navigate(['/2fa'])
  }
}

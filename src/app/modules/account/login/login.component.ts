import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.email, this.password);
  }


}

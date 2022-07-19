import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../account.component.css']
})
export class LoginComponent implements OnInit {


  login = {
    email: '',
    password: '',
  };
  
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { 
    this.accountService.isLoggedIn.subscribe(res => {
      console.log(res)
      if (res == true) {
        this.router.navigate([''])
      }
    })
  }

  ngOnInit(): void {

  }

  logar(form: NgForm) {
    this.accountService.login(this.login.email, this.login.password);
  }

}

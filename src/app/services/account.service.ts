import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router
  ) { }

  login(email: string, password: string) {
    this.isLoggedIn.next(true);
    this.router.navigate(['agendamentos']);
  }

  logout() {
    this.isLoggedIn.next(false);
    this.router.navigate(['account', 'login']);
  }

  resetPassword(token: string, senha: string) {
    
  }

  forgotPassword(email: string) {
    
  }



}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  resetPassword(token: string, senha: string) {
    
  }

  forgotPassword(email: string) {
    
  }



}

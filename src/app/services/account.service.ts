import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Loading } from '../helpers/loading';
import { Usuario } from '../models/usuario.model';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  userLogado: BehaviorSubject<Usuario | undefined> = new BehaviorSubject<Usuario | undefined>(undefined);

  constructor(
    private router: Router,
    private userService: UserService,
    private loading: Loading

  ) {
  }

  login(email: string, password: string) {
    this.loading.loading.next(true);
    return this.userService.getList().subscribe(res => {
      var user = res.find(x => x.email.toLowerCase() == email.toLowerCase() && x.password == password);
      if (user != null) {
        this.router.navigate(['agendamentos']);
        this.userLogado.next(user);
        this.isLoggedIn.next(true);
      } else {
        this.userLogado.next(undefined);
        this.isLoggedIn.next(false);
      }
      this.loading.loading.next(false);
    });
  }

  logout() {
    this.isLoggedIn.next(false);
    this.userLogado.next(undefined);
    this.router.navigate(['account', 'login']);
  }

  resetPassword(token: string, senha: string) {

  }

  forgotPassword(email: string) {

  }



}

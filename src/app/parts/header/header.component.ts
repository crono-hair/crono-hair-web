import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faIdCard, faSignOut, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { NavigationBar } from 'src/app/helpers/navigation-bar';
import { Usuario } from 'src/app/models/usuario.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  faSignOut = faSignOut;
  faIdCard = faIdCard;
  userLogadoOpen = false;
  menuLateralOpen: boolean = false;
  userLogado?: Usuario;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private navigationBar: NavigationBar
  ) {
    this.navigationBar.open.subscribe(res => this.menuLateralOpen = res);
    this.navigationBar.menuHeaderOpen.subscribe(res => this.userLogadoOpen = res);
    this.accountService.userLogado.subscribe(res => this.userLogado = res)
   }

  ngOnInit(): void {
  }

  toggleMenuHeader(): void {
    this.navigationBar.toggleMenuHeader();
  }

  sair() {
    this.accountService.logout();
  }
  toggleMenuAside(): void {
    this.navigationBar.toggleMenuAside();
  }

  openMenuAside() {
    this.navigationBar.openMenuAside();
  }
  
  closeMenuAside() {
    this.navigationBar.closeMenuAside();
  }
}

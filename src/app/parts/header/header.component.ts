import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  userLogadoOpen = false;
  @ViewChild('pesquisarInput') pesquisarInput: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  toggleMenuHeader(): void {
    this.userLogadoOpen = !this.userLogadoOpen;
    // $('.header__userLogado-submenu').toggleClass('');
  }
  sair() {
  }

}

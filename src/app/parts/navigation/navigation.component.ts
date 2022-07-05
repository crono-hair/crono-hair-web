import { Component, OnInit } from '@angular/core';
import { faBars, faBuildingUser, faCalendar, faChevronRight, faHome, faIdCard, faIdCardAlt, faList, faPlus, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faChevronRight = faChevronRight;
  faBars = faBars;

  dados: link[] = [];
  navegacao: link[] = [];
  menuLateralOpen: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    this.navegacao = [
      { title: 'Dashboard', icon: faHome, url: 'home' },
      { title: 'Agendamentos', icon: faCalendar, url: 'home' },
      { title: 'Clientes', icon: faUsers, url: 'home' },
      { title: 'Funcionários', icon: faBuildingUser, url: 'home' },
      { title: 'Produtos', icon: faIdCard, url: 'home' },
      { title: 'Meus Dados', icon: faIdCard, url: 'home' },
    ]
    this.dados = [
      {
        title: 'Técnico inspeção', icon: faIdCardAlt, url: '', subLinks: [
          { title: 'Listagem', url: '/inspetor', icon: faList },
          { title: 'Cadastrar', url: '/inspetor/create', icon: faPlus },
        ]
      }
    ]
  }

  toggleSubMenuAside(el: any): void {
    $(el).parent('.aside__nav-submenu').toggleClass('aside--open')
    $(el).toggleClass('aside--open')
    $(el).siblings('.aside__nav-submenu__links').toggleClass('aside--open')
    $(el).siblings('.aside__nav-submenu__links').slideToggle(300);
  }

  openSubMenuAside(el: any): void {
    $(el).addClass('aside--open')
    $(el).parents('.aside__nav-submenu').addClass('aside--open')
    $(el).siblings('.aside__nav-submenu__links').addClass('aside--open')
    $(el).siblings('.aside__nav-submenu__links').slideDown(300);
  }


  toggleMenuAside(): void {
    $('.main').toggleClass('aside--close');
    $('.aside').toggleClass('aside--close');
    this.menuLateralOpen = !this.menuLateralOpen;
  }

  openMenuAside() {
    $('.main').addClass('aside--close');
    $('.aside').addClass('aside--close');
    this.menuLateralOpen = true;

  }
  closeMenuAside() {
    $('.main').removeClass('aside--close');
    $('.aside').removeClass('aside--close');
    this.menuLateralOpen = false;

  }

}

export class link {
  title?: string = undefined;
  icon?: IconDefinition = undefined;
  image?: string = undefined;
  url?: string = undefined;
  subLinks?: link[] = undefined;
}

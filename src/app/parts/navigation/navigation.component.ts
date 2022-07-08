import { Component, OnInit } from '@angular/core';
import { faBars, faBuildingUser, faCalendar, faChevronRight, faHome, faIdCard, faIdCardAlt, faList, faPlus, faTimes, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { NavigationBar } from 'src/app/helpers/navigation-bar';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faChevronRight = faChevronRight;
  faBars = faBars;
  faTimes = faTimes

  dados: link[] = [];
  navegacao: link[] = [];
  menuLateralOpen: boolean = false;
  constructor(
    private navigationBar: NavigationBar,
  ) {
  }

  ngOnInit(): void {
    this.navegacao = [
      { title: 'Dashboard', icon: faHome, url: 'home' },
      { title: 'Agendamentos', icon: faCalendar, url: 'agendamentos' },
      { title: 'Clientes', icon: faUsers, url: 'clientes' },
      { title: 'Funcionários', icon: faBuildingUser, url: 'funcionarios' },
      { title: 'Produtos', icon: faIdCard, url: 'produtos' },
      { title: 'Usuários', icon: faIdCard, url: 'users' },
    ]
    this.dados = [
      {
        title: 'Técnico inspeção', icon: faIdCardAlt, url: '', subLinks: [
          { title: 'Listagem', url: '/inspetor', icon: faList },
          { title: 'Cadastrar', url: '/inspetor/create', icon: faPlus },
        ]
      }
    ];

    this.navigationBar.open.subscribe(res => this.menuLateralOpen = res);
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

export class link {
  title?: string = undefined;
  icon?: IconDefinition = undefined;
  image?: string = undefined;
  url?: string = undefined;
  subLinks?: link[] = undefined;
}

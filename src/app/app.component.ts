import { AfterViewInit, Component } from '@angular/core';
import { NavigationBar } from './helpers/navigation-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  menuLateralOpen = false;
  constructor(
    private navigationBar: NavigationBar,
  ) {
    this.navigationBar.open.subscribe(res => this.menuLateralOpen = res);
  }

  ngAfterViewInit(): void {
    this.navigationBar.clickOut();
  }
}

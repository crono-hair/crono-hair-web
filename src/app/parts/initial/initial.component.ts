import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationBar } from 'src/app/helpers/navigation-bar';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit, AfterViewInit {
  
  menuLateralOpen = false;
  constructor(
    private navigationBar: NavigationBar,
  ) {
    this.navigationBar.open.subscribe(res => this.menuLateralOpen = res);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.navigationBar.clickOut();
  }
}

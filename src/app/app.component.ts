import { AfterViewInit, Component } from '@angular/core';
import { NavigationBar } from './helpers/navigation-bar';
import { Table } from './helpers/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private table: Table) {}

  ngAfterViewInit(): void {
    this.table.initialize();
  }

}

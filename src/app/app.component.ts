import { AfterViewInit, Component } from '@angular/core';
import { NavigationBar } from './helpers/navigation-bar';
import { Table } from './helpers/table';
import { AccountService } from './services/account.service';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private table: Table,
    private userService: UserService,
    private accountService: AccountService,
  ) {
    // this.userService.setList()
    this.accountService.userLogado.next(this.userService.getList().value[0]);
    this.accountService.isLoggedIn.next(true);
  }

  ngAfterViewInit(): void {
    this.table.initialize();
  }

}

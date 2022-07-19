import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faChevronLeft, faEllipsisV, faFilter, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Crypto } from 'src/app/helpers/crypto-js';
import { Table } from 'src/app/helpers/table';
import { Cliente, ClienteFiltro, ClienteRequest } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faFilter = faFilter;
  faEllipsisV = faEllipsisV;
  faTimes = faTimes;
  faPlus = faPlus;
  faArrowDown = faArrowDown;

  list: ClienteRequest[] = [];
  selected?: Cliente;
  selectedItems: Cliente[] = [];
  loading = true;
  cols: any[] = [];
  filters: string[] = [];
  filtro: ClienteFiltro = new ClienteFiltro;
  mensagem = '';

  constructor(
    private clienteService: ClienteService,
    private table: Table,
    private router: Router,
    private toastr: ToastrService,
    private currency: CurrencyPipe,
    private crypto: Crypto,
  ) {
    this.table.loading.subscribe(res => this.loading = res);
    this.table.selected.subscribe(res => this.selected = res);
    this.table.selectedItems.subscribe(res => this.selectedItems = res);
    this.cols = [
      { header: 'Nome', field: 'nome' },
      { header: 'CPF', field: 'cpf' },
      { header: 'Sexo', field: 'sexo' },
      { header: 'Celular', field: 'celular' },
      { header: 'E-mail', field: 'email' },
    ];

    this.filters = this.cols.map(x => x.field);

    this.clienteService.getList().subscribe(res => {
      this.list = res;
    });
    this.clienteService.list.subscribe(res => this.list = res);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.table.filter_position_on_table_scroll();
  }
  onRowSelect(data: any) {
    this.table.onRowSelect(data);
  }
  onRowUnselect(row: any) {
    this.table.onRowUnselect(row)
  }
}

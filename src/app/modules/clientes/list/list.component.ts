import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faChevronLeft, faEllipsisV, faFilter, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Crypto } from 'src/app/helpers/crypto-js';
import { Table } from 'src/app/helpers/table';
import { Cliente, ClienteFiltro } from 'src/app/models/cliente.model';
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

  list: Cliente[] = [];
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
      var loading = this.table.loading.subscribe(res => this.loading = res);
      var selected = this.table.selected.subscribe(res => this.selected = res);
      var selectedItems = this.table.selectedItems.subscribe(res => this.selectedItems = res);
      this.cols = [
        { header: 'Id' },
        { header: 'Nome' },
        { header: 'CPF' },
        { header: 'Salão' },
        { header: 'CNPJ' },
      ];

      this.filters = this.cols.map(x => x.field);
    
      // this.clienteService.getList().subscribe(res => {
      //   this.list = res
      // });
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

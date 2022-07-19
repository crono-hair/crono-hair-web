import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faChevronLeft, faEllipsisV, faFilter, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Crypto } from 'src/app/helpers/crypto-js';
import { Table } from 'src/app/helpers/table';
import { FuncionarioCargo } from 'src/app/models/funcionario-cargo.model';
import { CargoService } from 'src/app/services/cargo.service';

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

  list: FuncionarioCargo[] = [];
  selected?: FuncionarioCargo;
  selectedItems: FuncionarioCargo[] = [];
  loading = true;
  cols: any[] = [];
  filters: string[] = [];
  filtro: FuncionarioCargo = new FuncionarioCargo;
  mensagem = '';

  constructor(
    private cargoService: CargoService,
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
      { header: 'Id', field: 'id' },
      { header: 'Nome', field: 'nome' },
    ];

    this.filters = this.cols.map(x => x.field);

    this.cargoService.getList().subscribe(res => {
      this.list = res;
    });
    this.cargoService.list.subscribe(res => this.list = res);
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

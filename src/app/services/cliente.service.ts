import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Crypto } from '../helpers/crypto-js';
import { Table } from '../helpers/table';
import { Cliente, ClienteFiltro } from '../models/cliente.model';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	url: string = environment.url;
	list: BehaviorSubject<Cliente[]> = new BehaviorSubject<Cliente[]>([]);
	filtro: BehaviorSubject<ClienteFiltro | undefined> = new BehaviorSubject<ClienteFiltro | undefined>(undefined);

	constructor(
		private http: HttpClient,
		private table: Table,
		private crypto: Crypto,
	) { }
	limparFiltro() {
		this.table.loading.next(true);
		this.filtro.next(undefined);
	}

	filtrar() {
		this.table.loading.next(true);
		let list = this.list.value;
		if (this.filtro.value != undefined) {
			let filtro = this.filtro.value;
			if (filtro.id) {
				list = list.filter(x => x.id == filtro.id);
			}
			if (filtro.salao_Id) {
				list = list.filter(x => x.salao_Id == filtro.salao_Id);
			}
			if (filtro.pessoa_Id) {
				list = list.filter(x => x.pessoa_Id == filtro.pessoa_Id);
			}
		}

		this.list.next(list);
		this.table.loading.next(false);
		this.table.close_filter();
	}

	getList() {
		return this.http.get<Cliente[]>(`${this.url}/cliente`)
			.pipe(map(list => {
				this.list.next(list);
				if (this.filtro.value != undefined) {
					this.filtrar();
				}
				return list;
			}));
	}
}

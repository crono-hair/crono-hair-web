import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Crypto } from '../helpers/crypto-js';
import { Loading } from '../helpers/loading';
import { Table } from '../helpers/table';
import { Cliente, ClienteFiltro, ClienteRequest } from '../models/cliente.model';
import { ListComponent } from '../modules/clientes/list/list.component';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	url: string = environment.url;
	list: BehaviorSubject<ClienteRequest[]> = new BehaviorSubject<ClienteRequest[]>([]);
	filtro: BehaviorSubject<ClienteFiltro | undefined> = new BehaviorSubject<ClienteFiltro | undefined>(undefined);

	constructor(
		private http: HttpClient,
		private table: Table,
		private crypto: Crypto,
		private loading: Loading
	) { }

	getList() {
		this.loading.list.next(true);
		this.table.loading.next(true);
		var list = JSON.parse((localStorage.getItem('clientes') ?? '[]')) as ClienteRequest[];
		list.map(item => item.idEncrypted = this.crypto.encrypt(item.id))
		this.list.next(list);
		this.loading.list.next(false);
		this.table.loading.next(false);
		return this.list;
	}
	
	get(id: number) {
		this.loading.form.next(true);
		var obj = this.getList().value.find(x => x.id == id)
		if (obj) 
			obj.idEncrypted = this.crypto.encrypt(obj.id);
		this.loading.form.next(false);
		return new BehaviorSubject(obj);
	}
	
	create(model: ClienteRequest) {
		this.loading.form.next(true);
		var list = this.getList().value;
		model.id = 1;
		if (list.length > 0) {
			model.id = list[list.length -1].id + 1;
		}
		list.push(model)
		this.setList(list);
		this.loading.form.next(false);
		return new BehaviorSubject<boolean>(true);
	}
	
	edit(model: any) {
		this.loading.form.next(true);
		var list = this.getList().value;
		var index = list.findIndex(x => x.id == model.id);
		if (index != -1) {
			list[index] = model
			this.setList(list);
		}
		this.loading.form.next(false);
		return new BehaviorSubject<boolean>(true);
	}
	
	delete(id: number) {
		this.loading.form.next(true);
		var list = this.getList().value;
		var index = list.findIndex(x => x.id == id);
		if (index != -1) {
			list.splice(index, 1);
			this.setList(list);
		}
		this.loading.form.next(false);
		this.table.resetSelection();
		return new BehaviorSubject<boolean>(true);
	}
	
	setList(list: ClienteRequest[]) {
		localStorage.setItem('clientes', JSON.stringify(list));
	}
}

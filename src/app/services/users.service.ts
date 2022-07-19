import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Crypto } from '../helpers/crypto-js';
import { Loading } from '../helpers/loading';
import { Table } from '../helpers/table';
import { Sexo, Usuario, UsuarioFiltro } from '../models/usuario.model';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  contas: Usuario[] = []

	url: string = environment.url;
	list: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);
	filtro: BehaviorSubject<UsuarioFiltro | undefined> = new BehaviorSubject<UsuarioFiltro | undefined>(undefined);

	constructor(
		private http: HttpClient,
		private table: Table,
		private crypto: Crypto,
		private loading: Loading,
	) { 
    this.contas = [
      { 
        id: 1,
        idEncrypted: this.crypto.encrypt(1),
        nome: 'Admin da Silva',
        email: 'admin@gmail.com', 
        password: 'admin123', 
        celular: '11953463376', 
        dataNascimento: new Date(2000, 3, 26), 
        sexo: Sexo.Feminino,
        token: '',
        pessoa_Id: 1,
        tipoAcessos: [
        { id: 1, nome: 'Admin' },
        { id: 2, nome: 'Gestor' },
        { id: 3, nome: 'Funcionario' },
      ]},
      { 
        id: 2,
        idEncrypted: this.crypto.encrypt(2),
        nome: 'Gestor da Silva',
        email: 'gestor@gmail.com', 
        password: 'gestor123', 
        celular: '11953463376', 
        dataNascimento: new Date(2000, 3, 26), 
        sexo: Sexo.Feminino,
        token: '',
        pessoa_Id: 1,
        tipoAcessos: [
          { id: 2, nome: 'Gestor' },
      ]},
      { 
        id: 3,
        idEncrypted: this.crypto.encrypt(3),
        nome: 'Funcionario da Silva',
        email: 'func@gmail.com', 
        password: 'func123', 
        celular: '11953463376', 
        dataNascimento: new Date(2000, 3, 26), 
        sexo: Sexo.Feminino,
        token: '',
        pessoa_Id: 1,
        tipoAcessos: [
        { id: 3, nome: 'Funcionario' },
      ]},
    ];


    this.setList(this.contas);


  }

	getList() {
		this.loading.list.next(true);
		this.table.loading.next(true);
		var list = JSON.parse((localStorage.getItem('clientes') ?? '[]')) as Usuario[];
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
	
	create(model: Usuario) {
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
	
	setList(list: Usuario[]) {
		localStorage.setItem('clientes', JSON.stringify(list));
	}
}

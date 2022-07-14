import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Crypto } from 'src/app/helpers/crypto-js';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { Cliente, ClienteRequest } from 'src/app/models/cliente.model';
import { Alert } from 'src/app/parts/alert/alert';
import { AlertService } from 'src/app/parts/alert/alert.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cidade, Estado, LocalidadeService } from 'src/app/services/via-cep.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

	faTimes = faTimes;
	modalOpen = false;
	objeto = new ClienteRequest;
	erro: any[] = [];
	loading = false;
	subscription: Subscription[] = [];

	estados: Estado[] = [];
	cidades: Cidade[] = [];

	constructor(
		private router: Router,
		private toastr: ToastrService,
		private modal: ModalOpen,
		private clienteService: ClienteService,
		private viacepService: LocalidadeService,
		private route: ActivatedRoute,
		private crypto: Crypto,
		private alert: AlertService
	) {
		var getOpen = this.modal.getOpen().subscribe(res => {
			this.modalOpen = res;
		});
		this.subscription.push(getOpen)

		this.viacepService.getEstados().subscribe(res => {
			this.estados = res;
		});
		// this.viacepService.getCidades().subscribe(res => {
		// 	this.cidades = res;
		// });

		if (this.route.snapshot.params['id']) {
			let id = this.route.snapshot.params['id'];
			this.objeto.idEncrypted = this.crypto.encrypt(id);
			this.objeto.id = this.crypto.decrypt(this.objeto.idEncrypted);
			this.clienteService.get(this.objeto.id).subscribe(res => {
				if (res) {
					this.objeto = res;
				} else {
					this.toastr.error('Não é possível realizar essa operação');
					this.voltar();
				}
			});
		  } else {
			this.toastr.error('Não é possível realizar essa operação');
			this.voltar();
		  }

		// this.objeto = {
		// 	id: 0,
		// 	idEncrypted: '',
		// 	nome: 'Noemi Cavalcanti Almeida',
		// 	cpf: 22810679800,
		// 	sexo: 'Não informado',
		// 	dataNascimento: new Date(2000, 3, 26).toISOString(),
		// 	celular: '11953463376',
		// 	telefone: '1139719160',
		// 	email: 'calmeida.no@gmail.com',
		// 	cep: '02808000',
		// 	logradouro: 'Rua Xavier da Silva Ferrão',
		// 	numero: '246',
		// 	bairro: 'Sítio Morro Grande',
		// 	cidade: 'São Paulo',
		// 	uf: 'SP',

		// }
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.modal.setOpen(true);
		}, 200);
	}

	ngOnDestroy() {
		this.subscription.forEach(subs => {
			subs.unsubscribe()
		});
	}

	voltar() {
		this.modal.setOpen(false);
		setTimeout(() => {
			this.router.navigate(['clientes']);
		}, 200);
	}

	getEndereco() {
		if (this.objeto.cep?.toString()) {
			this.loading = true;
			this.viacepService.getEndereco(this.objeto.cep.toString()).subscribe(
				res => {
					this.objeto.logradouro = res.logradouro;
					this.objeto.bairro = res.bairro;
					this.objeto.cidade = res.localidade;
					this.objeto.uf = res.uf;
					this.objeto.numero = '';
					var estado = this.estados.find(x => x.nome.toLowerCase() == res.uf.toLowerCase());
					if (estado) {
						this.viacepService.getCidadesPorEstado(estado.id).subscribe(res => {
							this.cidades = res;
						});
					}
				},
				err => {
					console.error(err)
					this.toastr.error('Não foi possivel localizar esse endereço.')
				},
				() => {
					this.loading = false;
				}

			);
		}
	}


	isRequiredEndereco() {
		if (
			this.objeto.cep
			|| this.objeto.logradouro
			|| this.objeto.bairro
			|| this.objeto.numero
			|| this.objeto.cidade
			|| this.objeto.uf
		) {
			return true;
		} 
		return false;
	}

	send(form: NgForm) {
		this.loading = true;
		this.erro = [];

		this.clienteService.edit(this.objeto).subscribe(
			res => {
				this.clienteService.getList().subscribe();
				this.voltar();
				this.alert.success('Operação realizada com sucesso!' );
			}
		)

	}


}
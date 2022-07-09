import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cidade, Estado, LocalidadeService } from 'src/app/services/via-cep.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

	faTimes = faTimes;
	modalOpen = false;
	objeto = new Cliente;
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
		private viacepService: LocalidadeService
	) {
		var getOpen = this.modal.getOpen().subscribe(res => {
			this.modalOpen = res;
		});
		this.subscription.push(getOpen)

		this.viacepService.getEstados().subscribe(res => {
			this.estados = res;
		})
		this.viacepService.getCidades().subscribe(res => {
			this.cidades = res;
		})
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
		if (this.objeto.pessoa.endereco.cep.toString()) {
			this.loading = true;
			this.viacepService.getEndereco(this.objeto.pessoa.endereco.cep.toString()).subscribe(
				res => {
					this.objeto.pessoa.endereco = {
						id: this.objeto.pessoa.endereco.id,
						logradouro: res.logradouro,
						bairro: res.bairro,
						cidade: res.localidade,
						uf: res.uf	,
						numero: '',
						cep: this.objeto.pessoa.endereco.cep,
					}

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

	create(form: NgForm) {
		this.loading = true;
		this.erro = [];
		
	}


}

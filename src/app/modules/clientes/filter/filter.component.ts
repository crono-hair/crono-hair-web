import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { ClienteFiltro } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cidade, Estado, LocalidadeService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	faTimes = faTimes;
	modalOpen = false;
	objeto = new ClienteFiltro;
	erro: any[] = [];
	loading = false;

	estados: Estado[] = [];
	cidades: Cidade[] = [];

	constructor(
		private router: Router,
		private toastr: ToastrService,
		private modal: ModalOpen,
		private clienteService: ClienteService,
		private localService: LocalidadeService
	) {
		this.modal.getOpen().subscribe(res => {
			this.modalOpen = res;
		});

		this.localService.getEstados().subscribe(res => {
			this.estados = res;
		})
		this.localService.getCidades().subscribe(res => {
			this.cidades = res;
		})
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.modal.setOpen(true);
		}, 200);
	}

	voltar() {
		this.modal.setOpen(false);
		setTimeout(() => {
			this.router.navigate(['clientes']);
		}, 200);
	}

	getEndereco() {
		// if (this.objeto.pessoa.endereco.cep.toString()) {
		// 	this.loading = true;
		// 	this.localService.getEndereco(this.objeto.pessoa.endereco.cep.toString()).subscribe(
		// 		res => {
		// 			// this.objeto.pessoa.endereco = {
		// 			// 	id: this.objeto.pessoa.endereco.id,
		// 			// 	logradouro: res.logradouro,
		// 			// 	bairro: res.bairro,
		// 			// 	cidade: res.localidade,
		// 			// 	uf: res.uf	,
		// 			// 	numero: '',
		// 			// 	cep: this.objeto.pessoa.endereco.cep,
		// 			// }

		// 			var estado = this.estados.find(x => x.nome.toLowerCase() == res.uf.toLowerCase());
		// 			if (estado) {
		// 				this.localService.getCidadesPorEstado(estado.id).subscribe(res => {
		// 					this.cidades = res;
		// 				});
		// 			}
		// 		},
		// 		err => {
		// 			console.error(err)
		// 			this.toastr.error('Não foi possivel localizar esse endereço.')
		// 		},
		// 		() => {
		// 			this.loading = false;
		// 		}
	
		// 	);
		// }
	}

	create(form: NgForm) {
		this.loading = true;
		this.erro = [];

	}


}

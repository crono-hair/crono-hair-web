import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Crypto } from 'src/app/helpers/crypto-js';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { FuncionarioCargo } from 'src/app/models/funcionario-cargo.model';
import { AlertService } from 'src/app/parts/alert/alert.service';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	faTimes = faTimes;
	modalOpen = false;
	objeto = new FuncionarioCargo;
	erro: any[] = [];
	loading = false;


	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private toastr: ToastrService,
		private modal: ModalOpen,
		private cargoService: CargoService,
		private alert: AlertService,
		private crypto: Crypto,
	) {
		var getOpen = this.modal.getOpen().subscribe(res => {
			this.modalOpen = res;
		});
		if (this.route.snapshot.params['id']) {
			let id = this.route.snapshot.params['id'];
			this.objeto.idEncrypted = this.crypto.encrypt(id);
			this.objeto.id = this.crypto.decrypt(this.objeto.idEncrypted);
			this.cargoService.get(this.objeto.id).subscribe(res => {
				if (res) {
					this.objeto = res;
					setTimeout(() => {
						this.modal.setOpen(true);
					}, 200);
				} else {
					this.toastr.error('Não é possível realizar essa operação');
					this.voltar();
				}
			});
		} else {
			this.toastr.error('Não é possível realizar essa operação');
			this.voltar();
		}

	}

	ngOnInit(): void {
		setTimeout(() => {
			this.modal.setOpen(true);
		}, 200);
	}

	voltar() {
		this.modal.setOpen(false);
		setTimeout(() => {
			this.router.navigate(['cargos']);
		}, 200);
	}

	send(form: NgForm) {
		this.loading = true;
		this.erro = [];

		this.cargoService.edit(this.objeto).subscribe(
			res => {
				this.cargoService.getList().subscribe();
				this.voltar();
				this.alert.success('Operação realizada com sucesso!');
			}
		)

	}
}

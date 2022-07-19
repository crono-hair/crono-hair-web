import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { FuncionarioCargo } from 'src/app/models/funcionario-cargo.model';
import { AlertService } from 'src/app/parts/alert/alert.service';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	faTimes = faTimes;
	modalOpen = false;
	objeto = new FuncionarioCargo;
	erro: any[] = [];
	loading = false;


	constructor(
		private router: Router,
		private toastr: ToastrService,
		private modal: ModalOpen,
		private cargoService: CargoService,
		private alert: AlertService,
	) {
		var getOpen = this.modal.getOpen().subscribe(res => {
			this.modalOpen = res;
		});
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

		this.cargoService.create(this.objeto).subscribe(
			res => {
				this.cargoService.getList().subscribe();
				this.voltar();
				this.alert.success('Operação realizada com sucesso!' );
			}
		)

	}


}

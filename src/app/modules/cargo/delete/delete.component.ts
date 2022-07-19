import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaskApplierService } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Crypto } from 'src/app/helpers/crypto-js';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { Cliente } from 'src/app/models/cliente.model';
import { FuncionarioCargo } from 'src/app/models/funcionario-cargo.model';
import { AlertService } from 'src/app/parts/alert/alert.service';
import { CargoService } from 'src/app/services/cargo.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  modalOpen = false;
  objeto: FuncionarioCargo = new FuncionarioCargo;
  erro: any[] = [];
  loading = false;
  loadingObject = true;
  subscription: Subscription[] = [];
  id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modal: ModalOpen,
    private crypto: Crypto,
    private cargo: CargoService,
    public alert: AlertService,
  ) {
    var getOpen = this.modal.getOpen().subscribe(res => this.modalOpen = res);
    this.subscription.push(getOpen);

    if (this.route.snapshot.params['id']) {
      let id = this.route.snapshot.params['id'];
      this.objeto.idEncrypted = this.crypto.encrypt(id);
      this.objeto.id = this.crypto.decrypt(this.objeto.idEncrypted);
      this.cargo.get(this.objeto.id).subscribe(res => {
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
  }


  voltar() {
    this.modal.setOpen(false);
    setTimeout(() => {
      this.router.navigate(['cargos']);
    }, 200);
  }


  delete() {
    this.loading = true;
    this.cargo.delete(this.objeto.id).subscribe(
      res => {
				this.cargo.getList().subscribe();
				this.voltar();
				this.alert.success('Operação realizada com sucesso!' );
			},
      err => {
        this.toastr.error(err);
      }
    ).add(() => this.loading = false);
  }
}

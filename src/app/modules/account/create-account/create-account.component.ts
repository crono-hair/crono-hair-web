import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Loading } from 'src/app/helpers/loading';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./../account.component.css']
})
export class CreateAccountComponent implements OnInit {


  faChevron = faChevronCircleLeft;
  login = {
    nome: '',
    celular: '',
    email: '',
    password: '',
    confirmPassword: '',

  };
  
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private loading: Loading,

  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.loading.loading.next(true);
    setTimeout(() => {
      this.loading.loading.next(false); 
      this.router.navigate(['login']);
      this.toastr.success('Cadastrado com sucesso!')
    }, 500);
  }

}

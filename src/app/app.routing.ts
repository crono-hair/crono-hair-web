import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { InitialComponent } from './parts/initial/initial.component';


const clientes = () => import('./modules/clientes/clientes.module').then(x => x.ClientesModule);
const users = () => import('./modules/users/users.module').then(x => x.UsersModule);
const funcionarios = () => import('./modules/funcionarios/funcionarios.module').then(x => x.FuncionariosModule);
const account = () => import('./modules/account/account.module').then(x => x.AccountModule);
const produtos = () => import('./modules/produtos/produtos.module').then(x => x.ProdutosModule);
const agendamento = () => import('./modules/agendamento/agendamento.module').then(x => x.AgendamentoModule);
const cargos = () => import('./modules/cargo/cargo.module').then(x => x.CargoModule);
const salao = () => import('./modules/salao/salao.module').then(x => x.SalaoModule);


const routes: Routes = [
  {
    path: '', component: InitialComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'agendamentos', pathMatch: 'prefix' },
      { path: 'clientes', loadChildren: clientes },
      { path: 'users', loadChildren: users },
      { path: 'funcionarios', loadChildren: funcionarios },
      { path: 'agendamentos', loadChildren: agendamento },
      { path: 'produtos', loadChildren: produtos },
      { path: 'cargos', loadChildren: cargos },
      { path: 'salao', loadChildren: salao },
    ]
  },

  { path: 'account', loadChildren: account },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

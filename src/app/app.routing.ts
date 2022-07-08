import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const clientes = () => import('./modules/clientes/clientes.module').then(x => x.ClientesModule);
const users = () => import('./modules/users/users.module').then(x => x.UsersModule);
const funcionarios = () => import('./modules/funcionarios/funcionarios.module').then(x => x.FuncionariosModule);
const account = () => import('./modules/account/account.module').then(x => x.AccountModule);
const produtos = () => import('./modules/produtos/produtos.module').then(x => x.ProdutosModule);
const agendamento = () => import('./modules/agendamento/agendamento.module').then(x => x.AgendamentoModule);


const routes: Routes = [
  { path: '', redirectTo: 'agendamentos', pathMatch: 'full' },
  { path: 'clientes', loadChildren: clientes },
  { path: 'users', loadChildren: users },
  { path: 'funcionarios', loadChildren: funcionarios },
  { path: 'account', loadChildren: account },
  { path: 'agendamentos', loadChildren: agendamento },
  { path: 'produtos', loadChildren: produtos },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const account = () => import('./modules/account/account.module').then(x => x.AccountModule);
const clientes = () => import('./modules/clientes/clientes.module').then(x => x.ClientesModule);
const funcionarios = () => import('./modules/funcionarios/funcionarios.module').then(x => x.FuncionariosModule);
const produtos = () => import('./modules/produtos/produtos.module').then(x => x.ProdutosModule);
const users = () => import('./modules/users/users.module').then(x => x.UsersModule);
const agendamento = () => import('./modules/agendamento/agendamento.module').then(x => x.AgendamentoModule);

const routes: Routes = [
  { path: 'account', loadChildren: account },
  { path: 'clientes', loadChildren: clientes },
  { path: 'funcionarios', loadChildren: funcionarios },
  { path: 'produtos', loadChildren: produtos },
  { path: 'users', loadChildren: users },
  { path: 'agendamento', loadChildren: agendamento },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

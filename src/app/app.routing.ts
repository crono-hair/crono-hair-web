import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './parts/initial/initial.component';


const clientes = () => import('./modules/clientes/clientes.module').then(x => x.ClientesModule);
const users = () => import('./modules/users/users.module').then(x => x.UsersModule);
const funcionarios = () => import('./modules/funcionarios/funcionarios.module').then(x => x.FuncionariosModule);
const account = () => import('./modules/account/account.module').then(x => x.AccountModule);
const produtos = () => import('./modules/produtos/produtos.module').then(x => x.ProdutosModule);
const agendamento = () => import('./modules/agendamento/agendamento.module').then(x => x.AgendamentoModule);


const routes: Routes = [
  {
    path: '', component: InitialComponent, children: [
      { path: '', redirectTo: 'agendamentos', pathMatch: 'full' },
      { path: 'clientes', loadChildren: clientes },
      { path: 'users', loadChildren: users },
      { path: 'funcionarios', loadChildren: funcionarios },
      { path: 'agendamentos', loadChildren: agendamento },
      { path: 'produtos', loadChildren: produtos },
    ]
  },

  { path: 'account', loadChildren: account },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

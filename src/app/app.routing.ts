import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const clientesModule = () => import('./modules/clientes/clientes.module').then(x => x.ClientesModule);
const usersModule = () => import('./modules/users/users.module').then(x => x.UsersModule);
const funcionariosModule = () => import('./modules/funcionarios/funcionarios.module').then(x => x.FuncionariosModule);
const accountModule = () => import('./modules/account/account.module').then(x => x.AccountModule);
const agendamentoModule = () => import('./modules/agendamento/agendamento.module').then(x => x.AgendamentoModule);


const routes: Routes = [
    { path: 'clientes', loadChildren: clientesModule },
    { path: 'users', loadChildren: usersModule },
    { path: 'funcionarios', loadChildren: funcionariosModule },
    { path: 'account', loadChildren: accountModule },
    { path: 'agendamentos', loadChildren: agendamentoModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

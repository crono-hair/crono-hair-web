import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/helpers/role.guard';
import { AgendamentosComponent } from '../clientes/agendamentos/agendamentos.component';
import { FilterComponent } from '../clientes/filter/filter.component';
import { ListComponent } from '../clientes/list/list.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: ListComponent, children: [
    { path: 'cadastrar', component: CreateComponent },
    { path: 'filtro', component: FilterComponent },
    { path: 'editar/:id', component: EditComponent },
    { path: 'excluir/:id', component: DeleteComponent },
    { path: 'agendamentos/:id', component: AgendamentosComponent },
    { path: 'dashboard/:id', component: DashboardComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaoRoutingModule { }

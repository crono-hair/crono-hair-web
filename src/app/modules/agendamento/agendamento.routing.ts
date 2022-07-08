import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FilterComponent } from './filter/filter.component';


const routes: Routes = [
  { path: '', component: CalendarioComponent, children: [
    { path: 'create', component: CreateComponent },
    { path: 'filter', component: FilterComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'delete/:id', component: DeleteComponent },
  ] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }

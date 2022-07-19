import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  { path: '', component: ListComponent, children: [
    { path: 'cadastrar', component: CreateComponent },
    { path: 'filtro', component: FilterComponent },
    { path: 'editar/:id', component: EditComponent },
    { path: 'excluir/:id', component: DeleteComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }

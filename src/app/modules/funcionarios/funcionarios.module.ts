import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { FiltroComponent } from './filtro/filtro.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    AgendamentosComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }

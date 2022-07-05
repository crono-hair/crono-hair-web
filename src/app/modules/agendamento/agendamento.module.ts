import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { CalendarioComponent } from './calendario/calendario.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FiltroComponent } from './filtro/filtro.component';


@NgModule({
  declarations: [
    CalendarioComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule
  ]
})
export class AgendamentoModule { }

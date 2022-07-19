import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento.routing';
import { CalendarioComponent } from './calendario/calendario.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import listPlugin from '@fullcalendar/list'; // a plugin!

@NgModule({
  declarations: [
    CalendarioComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    FullCalendarModule
  ]
})
export class AgendamentoModule { }

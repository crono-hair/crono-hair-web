import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';
import { NgxMaskModule } from 'ngx-mask';

import { ClientesRoutingModule } from './clientes.routing';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { FilterComponent } from './filter/filter.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    AgendamentosComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
		FontAwesomeModule,
		FormsModule,
    TableModule,
		NgxMaskModule.forChild(),
    FullCalendarModule

  ]
})
export class ClientesModule { }

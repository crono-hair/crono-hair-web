import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios.routing';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { FilterComponent } from './filter/filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgxMaskModule } from 'ngx-mask';
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
    FuncionariosRoutingModule,
		FontAwesomeModule,
		FormsModule,
    TableModule,
		NgxMaskModule.forChild(),
    FullCalendarModule
  ]
})
export class FuncionariosModule { }

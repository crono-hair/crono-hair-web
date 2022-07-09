import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes.routing';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    AgendamentosComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
		FontAwesomeModule,
		FormsModule,
    TableModule,
		NgxMaskModule.forChild(),

  ]
})
export class ClientesModule { }

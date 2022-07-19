import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaoRoutingModule } from './salao-routing.module';
import { SalaoComponent } from './salao.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    SalaoComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    AgendamentoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SalaoRoutingModule
  ]
})
export class SalaoModule { }

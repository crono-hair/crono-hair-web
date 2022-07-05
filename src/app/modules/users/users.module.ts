import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FiltroComponent } from './filtro/filtro.component';


@NgModule({
  declarations: [
    ListComponent,
    ResetPasswordComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

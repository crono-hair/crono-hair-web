import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users.routing';
import { ListComponent } from './list/list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    ListComponent,
    ResetPasswordComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

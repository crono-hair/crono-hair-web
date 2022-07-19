import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo.routing';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxMaskModule } from 'ngx-mask';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CargoComponent } from './cargo.component';


@NgModule({
  declarations: [
    FilterComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    CargoComponent,
  ],
  imports: [
    CommonModule,
    CargoRoutingModule,
		FontAwesomeModule,
		FormsModule,
    TableModule,
		NgxMaskModule.forChild(),
    FullCalendarModule
  ],
  bootstrap: [CargoComponent]
})
export class CargoModule { }

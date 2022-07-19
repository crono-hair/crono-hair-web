import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountComponent } from './account.component';
import { NgxMaskModule } from 'ngx-mask';
import { MyAccountComponent } from './my-account/my-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountRoutingModule } from './account.routing';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    AccountComponent,
    MyAccountComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ToastrModule,
    FontAwesomeModule,
    NgxMaskModule.forChild(),
  ],
  bootstrap: [AccountComponent]
})
export class AccountModule { }

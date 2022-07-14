import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { InitialComponent } from './parts/initial/initial.component';
import { NavigationComponent } from './parts/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import localePt from '@angular/common/locales/pt';
import { AlertComponent } from './parts/alert/alert.component';

registerLocaleData(localePt);

const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InitialComponent,
    NavigationComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(
			{
				preventDuplicates: true,
				timeOut: 8000
			}),
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    // {provide: LOCALE_ID, useValue: 'en-US'},
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

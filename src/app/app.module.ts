import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProvideInterceptors } from './Services/Interceptors/provideInterceptors'

import { LoginModule } from './Modules/login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './Components/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [ProvideInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }

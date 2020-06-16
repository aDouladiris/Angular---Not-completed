import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule,
         MatIconModule,
         MatTreeModule,
         MatButtonModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CentreComponent } from './centre/centre.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { TicketComponent } from './ticket/ticket.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ClockService } from './services/clock.service';
import { AuthenticationService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    CentreComponent,
    LoginComponent,
    RegisterComponent,
    TicketComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [ClockService, AuthenticationService, AuthGuard],
  bootstrap: [CentreComponent],
  entryComponents: []
})
export class AppModule { }

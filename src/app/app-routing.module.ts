import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { TicketComponent } from './ticket/ticket.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CentreComponent } from './centre/centre.component';



const routes: Routes = [
  { path: '', component: CentreComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'ticket', component: TicketComponent },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

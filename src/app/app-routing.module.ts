import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LoginGuardService } from './Services/Login/loginGuard.service';
import { BookingsComponent } from './Components/bookings/bookings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/bookings', pathMatch: 'full' },
  { path: 'bookings', component: BookingsComponent, canActivate: [LoginGuardService] },
  { path: '**', redirectTo: '/bookings' } // TODO: create redirect to 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

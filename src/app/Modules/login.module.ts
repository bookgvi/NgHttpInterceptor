import { NgModule } from '@angular/core';
import { Authorization } from '../Services/Login/authorization';
import { AuthRepository } from '../Services/Login/auth.repository';
import { LoginGuardService } from '../Services/Login/loginGuard.service';

import { LoginComponent } from '../Components/login/login.component';

@NgModule({
  providers: [
    Authorization,
    AuthRepository,
    LoginGuardService
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule{}

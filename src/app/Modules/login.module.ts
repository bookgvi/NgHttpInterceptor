import { NgModule } from '@angular/core';
import { Authorization } from '../Services/Login/authorization';
import { AuthRepository } from '../Services/Login/auth.repository';

import { LoginComponent } from '../Components/login/login.component';

@NgModule({
  providers: [
    Authorization,
    AuthRepository
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule{}

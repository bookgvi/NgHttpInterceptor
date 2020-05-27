import { Component, OnInit } from '@angular/core';
import { AuthRepository } from '../../Services/Login/auth.repository';
import { IJWT } from '../../Services/Login/IJWT';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthRepository) {
    auth.login('artem', '123456');
    if (auth.getToken) {
      auth.getToken.subscribe(token => {
        console.log(token);
      })
    }
  }

  private instanceOf(obj: Object): obj is IJWT {
    return 'token_type' in obj
  }
  ngOnInit() {
  }

}

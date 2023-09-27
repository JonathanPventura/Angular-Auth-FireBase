import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService){}

  user: any;
  error: any;

  username: any = '';
  password: any = '';

 async login(){
    const isAuth = await this.auth.login(this.username, this.password)
  console.log(isAuth);

   return isAuth
  }


}

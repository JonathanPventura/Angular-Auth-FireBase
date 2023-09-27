import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error: any;
  token: any;


  //integração com FireBase
  constructor(public auth: AngularFireAuth){}

async login(username:any, password:any) {
    try {

      const credencial = await this.auth.signInWithEmailAndPassword(username, password) // Resposta das credenciais cadastradas

      username = credencial.user;
      this.getToken(); // pega o token do usuario 

      console.log('acesso liberado');

      return credencial.user
    } catch (error) {

      this.getToken();
      return error

    }
  }

  async getToken(){ // Pega o token do usuario
    try {
      const user = await this.auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();
        console.log(idToken);

      } else {
        console.log('Usuario não logado');

      }
    } catch (error) {
      console.log(error);

    }
  }
}

import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UsuarioService } from './usuario.service';
import { User } from 'model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usuarioService: UsuarioService, private cookie: CookieService) { }

  logIn(user: User){
    this.usuarioService.login(user).subscribe(login => {
      console.log(login)
      this.setCookie(login)
    })
  }

  setCookie(user: User){
    this.cookie.putObject('usuario', user)
  }

  getCookie(){
    const usuario = this.cookie.getObject('usuario')
    return usuario
  }

}

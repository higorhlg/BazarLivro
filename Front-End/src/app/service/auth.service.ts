import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'model/login.model';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usuarioService: UsuarioService, private cookie: CookieService) { }

  logIn(login: Login){
    this.usuarioService.login(login).subscribe(login => {
      console.log(login)
      this.setCookie(login)
    })
  }

  setCookie(login: Login){
    this.cookie.putObject('usuario', login)
  }

  getCookie(){
    const usuario = this.cookie.getObject('usuario')
    return usuario
  }

}

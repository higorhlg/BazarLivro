import { Injectable, EventEmitter } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from 'model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado = false;
  private usuarioLogado: User;
  mostrarMenu = new EventEmitter<boolean>();
  constructor(private usuarioService: UsuarioService, private router: Router, private cookieService:CookieService) { }

  verificaUsuarioLogado() {
    if (this.getCookies() !== null /*&& this.getLocalStorage() != null && this.getSessionStorage() != null*/) {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      console.log('Ok');
      /* console.log(this.getCookies());
      console.log(this.getLocalStorage());
      console.log(this.getSessionStorage()); */
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
      console.log('Not ok');
      /* console.log(this.getCookies());
      console.log(this.getLocalStorage());
      console.log(this.getSessionStorage()); */
    }
  }

  logIn(user: User){
    this.usuarioService.authenticate(user)
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  setCookies(usuario: User) {
    this.cookieService.putObject('usuario', usuario);
  }

  getCookies(): User {
    const usuarioCookie: any = this.cookieService.getObject('usuario');
    // console.log(usuarioCookie);
    return usuarioCookie;
  }

  delCookies() {
    this.cookieService.remove('usuario');
  }
}

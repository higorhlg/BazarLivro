import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UsuarioService } from './usuario.service';
import { User } from 'model/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false
  private usuarioLogado: User
  private mostrarMenu = new EventEmitter<boolean>()

  constructor(private usuarioService: UsuarioService, private cookie: CookieService,
              private router: Router) {
              }

  logIn(user: User){
    this.usuarioService.login(user).subscribe(user => {
      console.log(user)
      this.usuarioAutenticado = true
      this.usuarioLogado = user
      this.mostrarMenu.emit(true)
      this.setCookie(user)
      this.router.navigate(['/tela-inicial'])
    },
    response => {
      if(response.error){
        console.log(response.error.message);
      }
    }) 
  }

  setCookie(user: User){
    this.cookie.putObject('usuario', user)
  }

  getCookie(){
    const usuario = this.cookie.getObject('usuario')
    return usuario
  }

  delCookie(){
    this.cookie.remove('usuario')
  }

}

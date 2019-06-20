import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Anuncio } from 'model/anuncio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private cookie:CookieService) {
  }


  setCookie(anuncio: Anuncio[]){
    this.cookie.putObject('anuncio', anuncio)
  }

  getCookie(): any[] | any{
    if(this.cookie.getObject('anuncio') !== undefined){
      return this.cookie.getObject('anuncio')
    }
    return new Array
  }

  delCookie(){
    this.cookie.remove('anuncio')
  }

  contarItens(){
    let total = 0
    let cookie = this.getCookie()
    for (const iterator of cookie) {
      total += 1
    }
    return total
  }

  

}

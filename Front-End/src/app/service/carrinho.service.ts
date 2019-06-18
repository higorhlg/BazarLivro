import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Anuncio } from 'model/anuncio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  anuncios: Array<Anuncio> = []
  addAnuncios(item) {
    if(this.anuncios.includes(item)){
      console.log(`Item ${item.title} já no carrinho`)
    }
    else {this.anuncios.push(item)  }
  }
  constructor(private authService: AuthService, private cookie:CookieService) { 
  }

  public retornaAnuncios(): Anuncio[]{
    return this.anuncios
  }

  setCookie(anuncio: Anuncio[]){
    this.cookie.putObject('anuncio', anuncio)
  }

  getCookie(){
    return this.cookie.getObject('anuncio')
  }

  delCookie(){
    this.cookie.remove('anuncio')
  }

  

}

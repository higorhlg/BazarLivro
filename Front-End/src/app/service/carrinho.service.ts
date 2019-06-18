import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Anuncio } from 'model/anuncio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  anuncio: Anuncio = {
    activityStatus: "Ativo",
    _id: "5d0149d832e0a1249f0259c8",
    isbn: "ISBN 1212454512",
    user: "5cf5c12ca3635b0c6b386cae",
    synopsis: "Uma história 1",
    title: "Pequeno principe",
    price: 15,
    nameAuthor: "Antoine",
    availableForExchange: true,
    announcementDescription: "Descrição do anuncio",
    photo: "C:\\fakepath\\Captura de tela de 2019-06-11 17-47-26.png"
  }
  anuncio2: Anuncio = {
    activityStatus:	"Ativo",
    _id:	"5d07eddf2600f21ec9fc9a77",
    isbn:	"ISBN 4513654846",
    user:	"5cf5c12ca3635b0c6b386cae",
    title:	"Teoria de Grafos",
    price:	45,
    nameAuthor:	"André",
    synopsis:	"Aprenda Grafos",
    availableForExchange:	true,
    announcementDescription:	"Aprenda Grafos",
    photo:	"C:\\fakepath\\Captura de tela de 2019-06-10 11-55-51.png"
  }
  anuncios: Array<Anuncio> = []
  addAnuncios() {
    this.anuncios.push(this.anuncio, this.anuncio2)  
  }
  constructor(private authService: AuthService, private cookie:CookieService) { 
    this.addAnuncios()
  }

  public retornaAnuncios(): Anuncio[]{
    return this.anuncios
  }

  

}

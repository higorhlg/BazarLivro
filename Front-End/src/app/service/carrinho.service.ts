import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private authService: AuthService, private cookie:CookieService) { 

  }

}

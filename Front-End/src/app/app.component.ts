import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'BazarLivros';
  autenticado = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.mostrarMenu.subscribe(mostrar =>{
      this.autenticado = mostrar
    })
  }
}

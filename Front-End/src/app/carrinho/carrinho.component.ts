import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'model/anuncio.model';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  anuncios: Array<Anuncio> = []
  constructor(private carrinhoService: CarrinhoService) {
    
   }
  
  ngOnInit() {
    this.anuncios = this.carrinhoService.retornaAnuncios()
    console.log(this.anuncios)  
  }

}

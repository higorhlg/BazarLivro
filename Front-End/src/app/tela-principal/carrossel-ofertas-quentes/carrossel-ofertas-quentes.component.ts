import { Component, OnInit } from '@angular/core';
import { AnuncioService } from 'src/app/service/anuncio.service';
import { Anuncio } from 'model/anuncio.model';
import { CarrinhoService } from 'src/app/service/carrinho.service';

@Component({
  selector: 'app-carrossel-ofertas-quentes',
  templateUrl: './carrossel-ofertas-quentes.component.html',
  styleUrls: ['./carrossel-ofertas-quentes.component.scss']
})
export class CarrosselOfertasQuentesComponent implements OnInit {

linhaCarrosselInicial : Array<Anuncio> = []
linhasCarrossel : Array<Anuncio> = []
carrinho: Array<Anuncio> = []
addCarrinho(item){
  this.carrinho.push(item)
  this.carrinhoService.addAnuncios(item)
  this.carrinhoService.setCookie(this.carrinho)
}



  anuncios : Array<Anuncio> = []
  constructor(private anuncioService:AnuncioService, private carrinhoService: CarrinhoService) { 
    anuncioService.getAll().subscribe( res => {
      this.anuncios = res
      this.linhaCarrosselInicial = this.anuncios.slice(0,4)
      this.carregar_carrosel(this.anuncios)


    })
  }

  carregar_carrosel(conteudo){
    const chunk_size = 4

    for (let j=chunk_size; j < conteudo.length ;j+=chunk_size){
      let tempArray = conteudo.slice(j,j+chunk_size)
      this.linhasCarrossel.push(tempArray)
    }
    console.log(this.linhaCarrosselInicial)
    console.log(this.linhasCarrossel)
  }

  ngOnInit() {
  }

}

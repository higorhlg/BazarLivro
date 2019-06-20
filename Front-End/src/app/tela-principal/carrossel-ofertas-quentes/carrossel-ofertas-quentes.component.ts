import { Component, OnInit } from '@angular/core';
import { AnuncioService } from 'src/app/service/anuncio.service';
import { Anuncio } from 'model/anuncio.model';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-carrossel-ofertas-quentes',
  templateUrl: './carrossel-ofertas-quentes.component.html',
  styleUrls: ['./carrossel-ofertas-quentes.component.scss']
})
export class CarrosselOfertasQuentesComponent implements OnInit {

linhaCarrosselInicial : Array<Anuncio> = []
linhasCarrossel : Array<Anuncio> = []




  anuncios : Array<Anuncio> = []
  constructor(private anuncioService:AnuncioService, private carrinhoService: CarrinhoService, private authService: AuthService) { 
    anuncioService.getAll().subscribe( res => {
      this.anuncios = res
      this.linhaCarrosselInicial = this.anuncios.slice(0,4)
      this.carregar_carrosel(this.anuncios)


    })
  }

  cookie: any = this.carrinhoService.getCookie()
  verificaItem(item){
    for (const iterator of this.cookie) {
      if(iterator._id === item._id){
        return true
      }
    }
    return false
  }
  carrinho: any = this.cookie
  addCarrinho(item): void{
    // console.log('cookie') 
    
    // console.log(this.carrinho)
    if(item.user.nome === this.authService.getCookie()['nome']){
      alert(`${this.authService.getCookie()['nome']} você não pode adicionar anuncio feito por você`)
      console.log(this.carrinho)
      return 
    }
    if(this.carrinho.includes(item)){
      alert(`${this.authService.getCookie()['nome']} você já adicionou esse!`)
      return
    }
    if(this.verificaItem(item)){
      alert(`${this.authService.getCookie()['nome']} você já adicionou esse!`)
      return
    }
    else{
      this.carrinho.push(item)
      this.carrinhoService.setCookie(this.carrinho)
      // console.log(this.carrinho)
    }
  }

  exibir_anuncio(item){
    console.log(item)
  }

  carregar_carrosel(conteudo){
    const chunk_size = 4

    for (let j=chunk_size; j < conteudo.length ;j+=chunk_size){
      let tempArray = conteudo.slice(j,j+chunk_size)
      this.linhasCarrossel.push(tempArray)
    }
    // console.log(this.linhaCarrosselInicial)
    // console.log(this.linhasCarrossel) 
  }

  ngOnInit() {
  }

}

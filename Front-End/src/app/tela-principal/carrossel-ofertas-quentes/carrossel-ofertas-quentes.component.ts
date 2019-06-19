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
//   linhaCarrosselInicial = [{
//     src: "../../../assets/img/1.png",
//     descricao: "Harry Porco",
//     preco: "R$199.99"
//   },
//   {
//     src: "../../../assets/img/3.png",
//     descricao: "A corna",
//     preco: "R$199.99"
//   },
//   {
//     src: "../../../assets/img/1.png",
//     descricao: "Harry Porco",
//     preco: "R$199.99"
//   },
//   {
//     src: "../../../assets/img/3.png",
//     descricao: "A corna",
//     preco: "R$199.99"
//   },





// ]
linhaCarrosselInicial : Array<Anuncio> = []
carrinho: Array<Anuncio> = [] 
addCarrinho(item){
  if(this.carrinho.includes(item)){
    alert(`Item ${item.title} já no carrinho`)
  }
  else {
    if(this.authService.getCookie()['nome'] === item.user.nome){
      alert(`${this.authService.getCookie()['nome']} não pode comprar de anúncio feito por você`)
    }
    else{
      console.log('adicionado')
      this.carrinho.push(item)
      this.carrinhoService.setCookie(this.carrinho)
    }
  }
  // this.carrinhoService.addAnuncios(item)
}



linhasCarrossel =[
  [{
    src: "../../../assets/img/1.png",
    descricao: "Harry Porco",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/3.png",
    descricao: "A corna",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/1.png",
    descricao: "Harry Porco",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/3.png",
    descricao: "A corna",
    preco: "R$199.99"
  },





],
[{
  src: "../../../assets/img/1.png",
  descricao: "Harry Porco",
  preco: "R$199.99"
},
{
  src: "../../../assets/img/3.png",
  descricao: "A corna",
  preco: "R$199.99"
},
{
  src: "../../../assets/img/1.png",
  descricao: "Harry Porco",
  preco: "R$199.99"
},
{
  src: "../../../assets/img/3.png",
  descricao: "A corna",
  preco: "R$199.99"
},





]
]


  anuncios : Array<Anuncio> = []
  constructor(private anuncioService:AnuncioService, private carrinhoService: CarrinhoService, private authService: AuthService) { 
    anuncioService.getAll().subscribe( res => {
      this.anuncios = res
      console.log(this.anuncios)

      this.linhaCarrosselInicial = this.anuncios

    })
  }

  ngOnInit() {
  }

}

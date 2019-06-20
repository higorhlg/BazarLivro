import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'model/anuncio.model';
import { CarrinhoService } from '../service/carrinho.service';
import { Transacao } from 'model/transacao.model';
import { AuthService } from '../service/auth.service';
import { TransacaoService } from '../service/transacao.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  anuncios: any
  transacao: Transacao
  constructor(private carrinhoService: CarrinhoService, private authService: AuthService, private transacaoService: TransacaoService) {
    this.anuncios = this.carrinhoService.getCookie()
    this.total()
   }
  
  ngOnInit() {
    this.anuncios = this.carrinhoService.getCookie()
    console.log(this.anuncios)
    this.total()
    // this.transacao = new Transacao
    // this.transacao.anuncio = this.anuncios[0]._id
    // this.transacao.comprador = this.authService.getCookie()['_id']
    // this.transacao.vendedor = this.anuncios[0].user._id
  }

  removerItem(item) {
    let teste = this.anuncios.splice(item,1)
    this.carrinhoService.setCookie(this.anuncios)
    console.log(this.anuncios)
  }
  
  total(): number {
    let resultado = 0
    for (let index = 0; index < this.anuncios.length; index++) {
      if(this.anuncios[index].availableForExchange === true)
        this.anuncios[index].availableForExchange = "SIM"
      if(this.anuncios[index].availableForExchange === false)
        this.anuncios[index].availableForExchange = "NÃO"
      resultado += this.anuncios[index].price
    }
    // console.log(resultado)
    return resultado
  }

  vender(){
    this.transacao = new Transacao
    for (let index = 0; index < this.anuncios.length; index++) {
      this.transacao.anuncio = this.anuncios[index]._id
      console.log(this.anuncios[index]._id)
      this.transacao.comprador = this.authService.getCookie()['_id']
      this.transacao.vendedor = this.anuncios[index].user._id
      this.transacaoService.save(this.anuncios[index]).subscribe(transacao=>{
        this.transacao = new Transacao
        alert(`${this.authService.getCookie()['nome']} sua compra foi finalizada com sucesso`)
      })
    }
  }

}

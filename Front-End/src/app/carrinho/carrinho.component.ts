import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'model/anuncio.model';
import { CarrinhoService } from '../service/carrinho.service';
import { Transacao } from 'model/transacao.model';
import { AuthService } from '../service/auth.service';
import { TransacaoService } from '../service/transacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  anuncios: any
  transacao: Transacao
  item: any
  constructor(private carrinhoService: CarrinhoService, private authService: AuthService, private transacaoService: TransacaoService, private route: Router) {
    this.anuncios = this.carrinhoService.getCookie()
    this.total()
   }
  
  ngOnInit() {
    this.anuncios = this.carrinhoService.getCookie()
    console.log(this.anuncios)
    this.total()
  }

  removerItem(item) {
    let teste = this.anuncios.splice(item,1)
    this.carrinhoService.setCookie(this.anuncios)
    console.log(this.anuncios)
    
  }
  
  total(): number {
    let resultado = 0
    if(this.anuncios){
      for (let index = 0; index < this.anuncios.length; index++) {
        if(this.anuncios[index].availableForExchange === true)
          this.anuncios[index].availableForExchange = "SIM"
        if(this.anuncios[index].availableForExchange === false)
          this.anuncios[index].availableForExchange = "NÃO"
        resultado += this.anuncios[index].price
      }
    }
    // console.log(resultado)
    return resultado
  }

  vender(){
    if(this.anuncios){
      this.route.navigate(['/opcoes-pagamento'])
      //this.carrinhoService.delCookie()
    }
  }
  verifica_carrinho():boolean{
    let x = false
    if(this.anuncios.length === 0) return false
    else return true
  }

}

import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../service/transacao.service';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { Transacao } from 'model/transacao.model';
import { Anuncio } from 'model/anuncio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-cartao',
  templateUrl: './pagamento-cartao.component.html',
  styleUrls: ['./pagamento-cartao.component.scss']
})
export class PagamentoCartaoComponent implements OnInit {
  anuncios : Array<Anuncio>
  transacao : Transacao
  constructor(private authService : AuthService, private tService :TransacaoService,
     private cService : CarrinhoService, private route : Router ) { 
    
  }

  vender(){
    this.anuncios = this.cService.getCookie()
    for (const iterator of this.anuncios) {
      this.transacao = new Transacao
      this.transacao.anuncio = iterator._id
      this.transacao.comprador = this.authService.getCookie()['_id']
      this.transacao.vendedor = iterator.user._id
      this.tService.save(this.transacao).subscribe(tr =>{
        let transacao: any = tr
        alert(`O vendedor ${transacao.vendedor.nome} agradece a sua compra ${transacao.comprador.nome}`)
        this.transacao = new Transacao
        this.route.navigate(['/transacoes'])
      })
    }
  }

  ngOnInit() {

  }


}

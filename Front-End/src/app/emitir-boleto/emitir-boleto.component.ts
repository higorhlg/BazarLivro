import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { AnuncioService } from '../service/anuncio.service';
import { AuthService } from '../service/auth.service';
import { TransacaoService } from '../service/transacao.service';
import { Router } from '@angular/router';
import { Transacao } from 'model/transacao.model';
import { Anuncio } from 'model/anuncio.model';

@Component({
  selector: 'app-emitir-boleto',
  templateUrl: './emitir-boleto.component.html',
  styleUrls: ['./emitir-boleto.component.scss']
})
export class EmitirBoletoComponent implements OnInit {
  anuncios: Array<Anuncio>
  transacao: Transacao
  constructor(private authService: AuthService, private tService: TransacaoService,
    private anuncioService: AnuncioService,
    private cService: CarrinhoService, private route: Router) {
    // this.vender()
  }
  imprimir(){
    window.print()
    this.vender()
  }

  vender() {
    this.anuncios = this.cService.getCookie()
    for (const iterator of this.anuncios) {
      //this.anuncioService.delete(iterator)
      this.transacao = new Transacao
      this.transacao.anuncio = iterator._id
      this.transacao.comprador = this.authService.getCookie()['_id']
      this.transacao.vendedor = iterator.user._id
      this.tService.save(this.transacao).subscribe(tr => {
        let transacao: any = tr
        this.anuncioService.updateStatus(iterator._id).subscribe(ad => {
          console.log(ad)
        })
        alert(`O vendedor ${transacao.vendedor.nome} agradece a sua compra ${transacao.comprador.nome}`)
        this.transacao = new Transacao
        this.cService.delCookie()
        this.route.navigate(['/transacoes'])
      })
    }
  }

  ngOnInit() {
  }

}

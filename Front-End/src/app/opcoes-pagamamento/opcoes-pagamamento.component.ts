import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcoes-pagamamento',
  templateUrl: './opcoes-pagamamento.component.html',
  styleUrls: ['./opcoes-pagamamento.component.scss']
})
export class OpcoesPagamamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  emitirBoleto(){
    this.router.navigate(['/emitir-boleto'])
  }

  cartaoCredito(){
    this.router.navigate(['/pagamento-cartao'])
  }
}

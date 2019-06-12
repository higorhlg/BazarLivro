import { Component, OnInit } from '@angular/core';
import {Transacao} from 'model/transacao.model'
import { TransacaoService } from '../service/transacao.service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-exibir-transacoes',
  templateUrl: './exibir-transacoes.component.html',
  styleUrls: ['./exibir-transacoes.component.scss']
})
export class ExibirTransacoesComponent implements OnInit {

  transacoes : Transacao[]
  constructor(private t_service: TransacaoService, auth_service: AuthService) {
    t_service.getAll().subscribe(t => {
      this.transacoes = t
    })
  }

  ngOnInit() {
  }

}

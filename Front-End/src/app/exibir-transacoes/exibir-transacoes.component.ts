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
    t_service.getByUser(auth_service.getCookie()["_id"]).subscribe(t => {
      
      this.transacoes = t
      this.transacoes.forEach(i => {
      let data = new Date(i.data)
      let dataFormatada = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear()
      let horaFormatada = data.getUTCHours() + ':' + data.getUTCMinutes()
      i.data = dataFormatada + ' ' + horaFormatada
      console.log(dataFormatada, horaFormatada)
        
      });
    })
  }

  ngOnInit() {
  }

}

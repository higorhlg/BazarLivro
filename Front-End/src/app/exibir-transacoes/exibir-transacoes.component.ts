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
  data: Date
  dataFormatada: string
  horaFormatada: string
  constructor(private t_service: TransacaoService, auth_service: AuthService) {
    t_service.getByUser(auth_service.getCookie()["_id"]).subscribe(t => {
      
      this.transacoes = t
      this.transacoes.forEach(i => {
      this.data = new Date(i.data)
      this.dataFormatada = this.data.getDate() + '/' + this.data.getMonth() + '/' + this.data.getFullYear()
      this.horaFormatada = this.data.getUTCHours() + ':' + this.data.getUTCMinutes()
      i.data = this.dataFormatada + ' ' + this.horaFormatada
      console.log(this.dataFormatada, this.horaFormatada)
        
      });
    })
  }

  verifica_transacao(): boolean{
    if(this.transacoes.length === 0) return false
    else return true
  }

  ngOnInit() {
  }

}

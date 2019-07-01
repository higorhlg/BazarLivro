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
  constructor(private t_service: TransacaoService, private auth_service: AuthService) {
    this.exibirTransacao()
  }

  verifica_transacao(): boolean{
    if(this.transacoes === undefined) return false
    else return true
  }

  exibirTransacao(){
    this.t_service.getByUser(this.auth_service.getCookie()["_id"]).subscribe(t => {
      
      this.transacoes = t
      this.transacoes.forEach(i => {
      this.data = new Date(i.data)
      this.dataFormatada = this.data.getDate() + '/' + this.data.getMonth() + '/' + this.data.getFullYear()
      this.horaFormatada = this.data.getUTCHours() + ':' + this.data.getUTCMinutes()
      i.data = this.dataFormatada + ' ' + this.horaFormatada
      // console.log(this.dataFormatada, this.horaFormatada)
        
      });
    })
  }

  ngOnInit() {
    this.exibirTransacao()
  }

}

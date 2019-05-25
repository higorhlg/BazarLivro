import { Component, OnInit } from '@angular/core';
import { User } from 'model/usuario.model';

@Component({
  selector: 'app-cartao-cadastro-usuario',
  templateUrl: './cartao-cadastro-usuario.component.html',
  styleUrls: ['./cartao-cadastro-usuario.component.scss']
})
export class CartaoCadastroUsuarioComponent implements OnInit {
  
  novouser = {
    nome:'',
    datanascimento:'',
    cpf:'',
    endereco:'',
    usuario:'',
    telefone:'',
    celular:'',
    email:'',
    senha:''
  }
  public aux:any = {}
  public user: User
  constructor() {
    this.user = new User
  }

  ngOnInit() {
  }

  onSubmit(e){
    console.log(e);
  }
}

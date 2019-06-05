import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { AuthService } from '../service/auth.service';
import { User } from 'model/usuario.model';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.scss']
})
export class MinhaContaComponent implements OnInit {

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

  usuario_logado : User
  constructor(private user_service :UsuarioService, auth_service : AuthService) { 
    // this.usuario_logado = user_service.getById(auth_service.getCookie()['id']);
    user_service.getById(auth_service.getCookie()['_id']).subscribe( user => {
      this.usuario_logado = user
      console.log(this.usuario_logado)
    })
    //this.usuario_logado = user_service.getById(auth_service.getCookie()['_id']);
    //console.log(auth_service.getCookie()['_id'])


  }

  ngOnInit() {
  }



}

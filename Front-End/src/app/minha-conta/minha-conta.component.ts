import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }



}

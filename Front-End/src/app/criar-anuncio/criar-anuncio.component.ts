import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.component.html',
  styleUrls: ['./criar-anuncio.component.scss']
})
export class CriarAnuncioComponent implements OnInit {

  novoanuncio = {
    titulo:'',
    isbn:'',
    preco:'',
    autor:'',
    sinopse:'',
    disponibilidade_troca:'',
    descricao:'',
    imagem:''
  }
  
  constructor() {

   }

  ngOnInit() {
  }
}

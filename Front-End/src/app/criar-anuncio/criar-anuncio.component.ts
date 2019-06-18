import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { Anuncio } from 'model/anuncio.model';
import { AnuncioService } from '../service/anuncio.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.component.html',
  styleUrls: ['./criar-anuncio.component.scss']
})
export class CriarAnuncioComponent implements OnInit {

  public anuncio: Anuncio
  
  constructor(private anuncioService: AnuncioService, private authService: AuthService) {
    this.anuncio = new Anuncio()
    this.anuncio.isbn = 'ISBN '
    this.anuncio.user = this.authService.getCookie()['_id']
   }

  ngOnInit() {
  }

  // cadastrar(){
  //   this.anuncioService.create(this.anuncio).subscribe(anuncio =>{
  //     this.anuncio = new Anuncio()
  //     console.log(this.anuncio.user)
  //   })
  // }


  cadastrar(){
    this.anuncioService.create(this.anuncio).subscribe(anuncio =>{
      this.anuncio = new Anuncio()
      console.log(this.anuncio.user)
    })
  }

  onSubmit(form1){


    console.log(this.anuncio);
    if(form1.valid){
      this.cadastrar()
    }
    else{
      alert("Dados inválidos")
    }
  }




}

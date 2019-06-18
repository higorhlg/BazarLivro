import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { Anuncio } from 'model/anuncio.model';
import { AnuncioService } from '../service/anuncio.service';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'
import 'rxjs/add/operator/map'

import {Observable, Subject} from 'rxjs'
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.component.html',
  styleUrls: ['./criar-anuncio.component.scss']
})
export class CriarAnuncioComponent implements OnInit {

  public anuncio: Anuncio
  
  constructor(private anuncioService: AnuncioService, private authService: AuthService,
    private http: HttpClient) {
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

  pic_file : any
  fileName :any
  filePreview : any
  pic_base64 : any
  onFileSelected(event){
    this.pic_file = event.target.files[0]
    
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      reader.readAsDataURL(this.pic_file);
      reader.onload = () => {

        this.fileName = this.pic_file + " " + this.pic_file.type;
        this.filePreview = 'data:image/png' + ';base64,' + reader.result.slice(0,100);
        this.pic_base64 = reader.result.toString()
        console.log(reader.result.slice(0,1000))
      };
    }
  }


  cadastrar(){
    
    this.anuncioService.create(this.anuncio).subscribe(anuncio =>{
      this.anuncio = new Anuncio()
      console.log(this.anuncio.user)
    })
  }



  onSubmit(form1){

    let Params = new HttpParams()
    let fd = new FormData()
    fd.append('key','8870a49e3a5c51a8498574595882c09e')
    fd.append('image', this.pic_file)
    //Params.append('key', '8870a49e3a5c51a8498574595882c09e')
    //Params.append('image', this.pic_file)

   
    this.http.post("https://api.imgbb.com/1/upload", fd)
    .subscribe(res => {
      //let test = res.valueOf.arguments
      this.anuncio.photo = res['data']['display_url']
    })
    console.log(this.anuncio);
    if(form1.valid){
      this.cadastrar()
    }
    else{
      alert("Dados inválidos")
    }
  }




}

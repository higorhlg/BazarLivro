import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.component.html',
  styleUrls: ['./criar-anuncio.component.scss']
})
export class CriarAnuncioComponent implements OnInit {


  anuncioForm = this.fb.group({
    titulo:[null,[Validators.required,]],
    ISBN:[null,[Validators.required]],
    preco:["1",[Validators.required]],
    autor:[null,[Validators.required,]],
    sipnose:[null]
  })

  onSubmit(e){
    console.log(e);
  }
  constructor(private fb:FormBuilder) {
    



   }



  ngOnInit() {
  }
}

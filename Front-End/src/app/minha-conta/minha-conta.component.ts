import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.scss']
})
export class MinhaContaComponent implements OnInit {

  formForm = this.fb.group({
    nomeCompleto:[null,[Validators.required,]],
    dataNascimento:[null,[Validators.required]],
    CPF:[null,[Validators.required,Validators.pattern("[0-9]*")]],
    endereco:[null,[Validators.required,]],
    nomeDeUsuario:[null,[Validators.required,]],
    senha:[null,[Validators.required,Validators.pattern(".{1,15}")]],
    email:[null,[Validators.required,Validators.email]],
    telefone:[null,[Validators.required,Validators.pattern("[0-9]*")]],
    celular:[null,[Validators.required,Validators.pattern("[0-9]*")]],

  })
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  isValid(campo){

    return this.formForm.get(campo).valid &&  this.formForm.get(campo).touched

}
isInvalid(campo){
return !this.formForm.get(campo).valid &&  this.formForm.get(campo).touched


}

}

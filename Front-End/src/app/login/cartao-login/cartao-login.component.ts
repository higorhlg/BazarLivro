import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'model/usuario.model';

@Component({
  selector: 'app-cartao-login',
  templateUrl: './cartao-login.component.html',
  styleUrls: ['./cartao-login.component.scss']
})
export class CartaoLoginComponent implements OnInit {
  
  public user: User
  constructor(private auth: AuthService) {
    this.user = new User
  }

  logIn(){
    this.auth.logIn(this.user)
  }

  onSubmit(form1){
    if(form1.valid)
      this.logIn()
    else
      alert("Dado(s) inválido(s)")
    //console.log(form1.valid)
  }

  ngOnInit() {
  }

}

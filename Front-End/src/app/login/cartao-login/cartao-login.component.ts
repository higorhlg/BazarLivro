import { Component, OnInit } from '@angular/core';
import { Login } from 'model/login.model';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cartao-login',
  templateUrl: './cartao-login.component.html',
  styleUrls: ['./cartao-login.component.scss']
})
export class CartaoLoginComponent implements OnInit {
  
  public login: Login
  constructor(private auth: AuthService, private usuarioService: UsuarioService) {
    this.login = new Login
  }

  logIn(){
    this.auth.logIn(this.login)
  }

  ngOnInit() {
  }

}

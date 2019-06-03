import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { User } from 'model/usuario.model';

@Component({
  selector: 'app-cartao-login',
  templateUrl: './cartao-login.component.html',
  styleUrls: ['./cartao-login.component.scss']
})
export class CartaoLoginComponent implements OnInit {
  
  public user: User
  constructor(private auth: AuthService, private usuarioService: UsuarioService) {
    this.user = new User
  }

  logIn(){
    this.auth.logIn(this.user)
  }

  ngOnInit() {
  }

}

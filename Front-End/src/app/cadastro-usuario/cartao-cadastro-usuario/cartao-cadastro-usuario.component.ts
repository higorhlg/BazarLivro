import { Component, OnInit } from '@angular/core';
import { User } from 'model/usuario.model'; 
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-cadastro-usuario',
  templateUrl: './cartao-cadastro-usuario.component.html',
  styleUrls: ['./cartao-cadastro-usuario.component.scss']
})
export class CartaoCadastroUsuarioComponent implements OnInit {

  public user: User
  constructor(private service: UsuarioService, private router: Router) {
    this.user = new User()
  }

  cadastrar(): void {
    this.service.create(this.user).subscribe(usr=>{
      alert(`Usuário criado com sucesso`)
      this.user = new User()
      this.router.navigate(['/login'])
    })
    console.log(this.user)
  }
  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'model/usuario.model'; 
import { CadastroUsuarioService } from '../../service/cadastro-usuario.service';

@Component({
  selector: 'app-cartao-cadastro-usuario',
  templateUrl: './cartao-cadastro-usuario.component.html',
  styleUrls: ['./cartao-cadastro-usuario.component.scss']
})
export class CartaoCadastroUsuarioComponent implements OnInit {

  public aux:any = {}
  public user: User
  constructor(private service: CadastroUsuarioService) {
    this.user = new User()
  }

  cadastrar(): void {
    this.service.save(this.user).subscribe(usr=>{
      alert(`Usuário criado com sucesso`)
      this.user = new User()
    })
    console.log(this.user)
  }
  ngOnInit() {
  }
}

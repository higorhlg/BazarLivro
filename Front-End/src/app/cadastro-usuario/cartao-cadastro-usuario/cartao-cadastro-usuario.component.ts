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
  mensagem: string
  public user: User
  constructor(private service: UsuarioService, private router: Router) {
    this.user = new User()
  }

  cadastrar(): void {
    this.service.create(this.user).subscribe(usr=>{
      alert(`Seja bem-vindo(a) ${usr.nome} sua conta foi criada com sucesso`)
      this.user = new User()
      this.router.navigate(['/login'])
    },
    response =>{
      if(response.error){
        alert(`Essa conta já está em uso. Tente outra`)
      }
    })
    // console.log(this.user)
  }
  onSubmit(form1){
    if(form1.valid)
      this.cadastrar()
    else
      alert("Dado(s) inválido(s)")
    //console.log(form1.valid)
  }
  ngOnInit() {
  }
}

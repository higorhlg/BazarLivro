import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { CriarAnuncioComponent } from './criar-anuncio/criar-anuncio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

const routes: Routes = [
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'criar-anuncio',
    component: CriarAnuncioComponent
  },
  {
    path: 'tela-inicial',
    component: TelaPrincipalComponent
  },
  {
    path: 'minha-conta',
    component: MinhaContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

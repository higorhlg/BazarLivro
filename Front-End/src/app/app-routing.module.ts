import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { CriarAnuncioComponent } from './criar-anuncio/criar-anuncio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { ExibirTransacoesComponent } from './exibir-transacoes/exibir-transacoes.component';
import { AuthGuardService } from './service/auth-guard.service';
import { CarrinhoComponent} from './carrinho/carrinho.component'

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'criar-anuncio',
    component: CriarAnuncioComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tela-inicial',
    component: TelaPrincipalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'transacoes',
    component: ExibirTransacoesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'minha-conta',
    component: MinhaContaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

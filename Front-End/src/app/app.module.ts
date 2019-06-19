import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CriarAnuncioComponent } from './criar-anuncio/criar-anuncio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CartaoLoginComponent } from './login/cartao-login/cartao-login.component';
import { CartaoCadastroUsuarioComponent } from './cadastro-usuario/cartao-cadastro-usuario/cartao-cadastro-usuario.component';
import { CarrosselOfertasQuentesComponent } from './tela-principal/carrossel-ofertas-quentes/carrossel-ofertas-quentes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RodapeComponent } from './rodape/rodape.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './service/usuario.service';
import { RouterModule } from '@angular/router';
import { ExibirTransacoesComponent } from './exibir-transacoes/exibir-transacoes.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ExibirAnuncioComponent } from './exibir-anuncio/exibir-anuncio.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CriarAnuncioComponent,
    TelaPrincipalComponent,
    MinhaContaComponent,
    CartaoLoginComponent,
    CartaoCadastroUsuarioComponent,
    CarrosselOfertasQuentesComponent,
    NavBarComponent,
    RodapeComponent,
    ExibirTransacoesComponent,
    CarrinhoComponent,
    ExibirAnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CookieService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

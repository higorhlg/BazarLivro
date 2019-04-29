import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CriarAnuncioComponent } from './criar-anuncio/criar-anuncio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CartaoLoginComponent } from './login/cartao-login/cartao-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CriarAnuncioComponent,
    TelaPrincipalComponent,
    MinhaContaComponent,
    CartaoLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

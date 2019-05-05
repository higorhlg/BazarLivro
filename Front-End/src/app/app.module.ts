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
import { CartaoCadastroUsuarioComponent } from './cadastro-usuario/cartao-cadastro-usuario/cartao-cadastro-usuario.component';
import { CarrosselOfertasQuentesComponent } from './tela-principal/carrossel-ofertas-quentes/carrossel-ofertas-quentes.component';
import { CarrosselOfertasDeCreditoComponent } from './tela-principal/carrossel-ofertas-de-credito/carrossel-ofertas-de-credito.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RodapeComponent } from './rodape/rodape.component';

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
    CarrosselOfertasDeCreditoComponent,
    NavBarComponent,
    RodapeComponent,
    
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

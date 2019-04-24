import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CriarAnuncioComponent } from './criar-anuncio/criar-anuncio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CriarAnuncioComponent,
    TelaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

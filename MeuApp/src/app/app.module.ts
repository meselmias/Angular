import { ClienteService } from './cliente.service';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioService } from './usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { routing } from './app.rounting';
import { UsuarioModule } from './usuario/usuario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoService } from './produto.service';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    ClienteComponent,
    BarraNavegacaoComponent,
    ProdutoComponent,
    MenuLateralComponent
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    UsuarioModule,
    LoginModule,
    ClienteModule,
    ProdutoModule
  ],
  providers: [
    UsuarioService,
    ClienteService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

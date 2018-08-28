import { UsuarioService } from './usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { routing } from './app.rounting';
import { UsuarioModule } from './usuario/usuario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { NovoUsuarioComponent } from './usuario/novo-usuario/novo-usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    UsuarioModule,
    HomeModule,
    LoginModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

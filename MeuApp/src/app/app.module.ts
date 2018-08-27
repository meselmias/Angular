import { routing } from './app.rounting';
import { UsuarioModule } from './usuario/usuario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    UsuarioModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

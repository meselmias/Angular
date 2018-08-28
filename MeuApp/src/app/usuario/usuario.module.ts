import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NovoUsuarioComponent]
})
export class UsuarioModule { }

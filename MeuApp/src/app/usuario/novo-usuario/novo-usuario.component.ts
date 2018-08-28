import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  usuario = {
    nome:"",
    email:"",
    senha: "",
    ConfirmaSenha: ""
  }

  retorno;

  constructor(private service: UsuarioService) { }

  ngOnInit() {
  }

  cadastrar(usuario){
    this.service.postUsuario(usuario)
    .subscribe(dados => this.retorno = dados);

  }
}

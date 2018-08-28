import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) {

  }

  getUsuarios() {
    return this.http.get("http://localhost:3000/usuario")
  }

  postUsuario(object) {
    return this.http.post("http://localhost:3000/usuario", object)
  }
}

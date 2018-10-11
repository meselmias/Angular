import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get("http://localhost:3000/clientes")
  }


  postCliente(object){
    return this.http.post("http://localhost:3000/clientes", object)
  }
}

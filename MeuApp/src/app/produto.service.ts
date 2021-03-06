import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }



  getProdutos(){
    return this.http.get("http://localhost:3000/produtos")
  }

  getProdutosDetalhes(id){
    console.log(id);
    return this.http.get('http://localhost:3000/produtos/' + id)    
  }
}

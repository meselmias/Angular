import { ProdutoService } from './../../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto;

  constructor(private ProdutoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.snapshot.params['id']
   console.log(this.route.snapshot.params['id']);
    //this.ProdutoService.getProdutosDetalhes(this.route.snapshot.params['id']).subscribe(dados => this.produto = dados)
    this.ProdutoService.getProdutosDetalhes(this.route.snapshot.params['id']).subscribe(dados => this.produto = dados)
    console.log(this.produto);
  }

}

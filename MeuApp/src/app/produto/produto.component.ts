import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  
  providers: [NgbAccordionConfig]
})
export class ProdutoComponent implements OnInit {

  produtos;

  constructor(private ProdutoService: ProdutoService, private router: Router) {
    // config.closeOthers = true;
    // config.type = 'info';
  }
 
  ngOnInit() {
    this.ProdutoService.getProdutos().subscribe(dados => this.produtos = dados)
  }

}

import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../cliente.service';
import { Component, OnInit } from '@angular/core';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente = {
    nome: "",
    cnpj: ""
  };
  response;

  constructor(private Service: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCadastro(object) {
    this.Service.postCliente(object).subscribe(
      data => this.response = data,
      error => alert(error)
    )
    if (this.response != null) {
      this.router.navigate(['cliente']);
    }
  }

  
}



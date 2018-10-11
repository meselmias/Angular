import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../cliente.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private Service: ClienteService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCadastro(object) {
    this.Service.postCliente(object).subscribe(data => this.response = data);

    this.router.navigate(['cliente']);
  }
  }

}

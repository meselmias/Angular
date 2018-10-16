import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {

  clientes;
  response;

  constructor(private Service: ClienteService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.Service.getClientes().subscribe(data => this.clientes = data);
  }


  excluir(obj){
    this.Service.delete(obj).subscribe(     
      data => this.response = data,
      error => alert(error))
    if (this.response != null) {
      this.router.navigate(['cliente']);
    }
  }

}

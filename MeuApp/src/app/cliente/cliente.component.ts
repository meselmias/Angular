import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {

  clientes;

  constructor(private Service: ClienteService) { 

  }

  ngOnInit() {
    this.Service.getClientes().subscribe(data => this.clientes = data);
  }


}

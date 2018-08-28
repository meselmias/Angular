import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mock = {
    nome: "Meselmias Marques",
    email:"meselmias@email.com",
    senha: "123456"
  }

  login = {
    nome: "Meselmias Marques",
    email:"",
    senha: ""
  }

  flagValidacao = false;
  flagValidacaoSuccess = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin(object){  
    if(object.email != this.mock.email){   
   
      this.flagValidacao = true;
    }else if (object.senha != this.mock.senha){
      this.flagValidacao = true;
    }else{
   
      this.flagValidacaoSuccess = true;
    }    
    
  }

}

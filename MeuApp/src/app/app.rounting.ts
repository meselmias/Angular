import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { NovoUsuarioComponent } from './usuario/novo-usuario/novo-usuario.component';
import { ProdutoComponent } from './produto/produto.component';

//componentes

const APP_ROUTES: Routes = [
    { path: 'produto', component: ProdutoComponent },
    { path: 'cliente/cadastro', component: CadastroClienteComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'usuario/cadastro', component: NovoUsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuario', component: UsuarioComponent }
    // { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
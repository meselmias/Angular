import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';

//componentes

const APP_ROUTES: Routes = [
    { path:'login', component: LoginComponent},
    { path:'usuario', component: UsuarioComponent},
    { path:'home', component: HomeComponent},
    { path:'', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
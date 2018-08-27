import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';

//componentes

const APP_ROUTES: Routes = [
    { path:'usuario', component: UsuarioComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
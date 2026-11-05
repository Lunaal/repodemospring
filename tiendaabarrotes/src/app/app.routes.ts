import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Producto } from './producto/producto';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'inicio', component: Inicio },
    { path: 'producto', component: Producto },
    { path: '**', component: NoEncontrado, title: 'Recurso no encotrado'}
];


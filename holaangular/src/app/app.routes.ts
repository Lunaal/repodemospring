import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Contacto } from './contacto/contacto';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'inicio', component: Inicio },
    { path: 'contacto', component: Contacto },
    { path: '**', component: NoEncontrado, title: 'Recurso no encotrado'}
];


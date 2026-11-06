import { Routes } from '@angular/router';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { MatriculaPlantilla } from './matricula-plantilla/matricula-plantilla';
export const routes: Routes = [
    { path: '', component: FormPlantilla, title:'Formulario basado en plantilla' },
    { path: 'matricula', component: MatriculaPlantilla, title:'Formulario basado en plantilla' }
];

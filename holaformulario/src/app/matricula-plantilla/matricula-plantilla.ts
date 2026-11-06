
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matricula-plantilla',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './matricula-plantilla.html',
  styleUrl: './matricula-plantilla.css',
})
export class MatriculaPlantilla {
  matriculas: any[] = [];

  onSubmit(form: NgForm) {
    if (form.valid) {
      let obj = {
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        dni: form.value.dni,
        email: form.value.email,
        edad: form.value.edad,
        carrera: form.value.carrera,
        año: form.value.año,
        observaciones: form.value.observaciones
      };
      this.matriculas.push(obj);
      console.log('Matrícula registrada:', obj);
      form.resetForm();
    }
  }
}

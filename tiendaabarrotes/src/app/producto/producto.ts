import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductoItem {
  codigo: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {

  productos: ProductoItem[] = [
    {
      codigo: 1,
      nombre: 'Arroz',
      categoria: 'Abarrotes',
      precio: 4.50,
      stock: 30
    },
    {
      codigo: 2,
      nombre: 'Azúcar',
      categoria: 'Abarrotes',
      precio: 4.00,
      stock: 25
    },
    {
      codigo: 3,
      nombre: 'Aceite vegetal',
      categoria: 'Abarrotes',
      precio: 9.50,
      stock: 18
    },
    {
      codigo: 4,
      nombre: 'Leche evaporada',
      categoria: 'Lácteos',
      precio: 4.20,
      stock: 40
    },
    {
      codigo: 5,
      nombre: 'Fideos',
      categoria: 'Abarrotes',
      precio: 3.50,
      stock: 35
    },
    {
      codigo: 6,
      nombre: 'Atún en lata',
      categoria: 'Enlatados',
      precio: 6.50,
      stock: 20
    },
    {
      codigo: 7,
      nombre: 'Galletas',
      categoria: 'Snacks',
      precio: 2.50,
      stock: 50
    },
    {
      codigo: 8,
      nombre: 'Agua mineral',
      categoria: 'Bebidas',
      precio: 2.00,
      stock: 45
    },
    {
      codigo: 9,
      nombre: 'Café',
      categoria: 'Bebidas',
      precio: 8.50,
      stock: 15
    },
    {
      codigo: 10,
      nombre: 'Sal',
      categoria: 'Abarrotes',
      precio: 2.00,
      stock: 28
    }
  ];

}
import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  productos: any[] = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    // Llama a la función para obtener todos los productos cuando el componente se inicia
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
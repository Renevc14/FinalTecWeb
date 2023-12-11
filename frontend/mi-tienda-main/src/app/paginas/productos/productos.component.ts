import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  productos: any[] = [];
  nombreProducto: string = '';
  mostrarDetalles: boolean = false;
  productosFiltrados: any[] = [];

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

  

  buscarProductosPorNombre(): void {
    if (this.nombreProducto.trim() !== '') {
      // Filtra los productos que contienen el nombre buscado
      this.productosFiltrados = this.productos.filter(producto => 
        producto.nombre.toLowerCase().includes(this.nombreProducto.toLowerCase())
      );

      this.mostrarDetalles = true;
    } else {
      // Si el campo de búsqueda está vacío, la lista se mantiene vacía y se ocultan los detalles
      this.productosFiltrados = [];
      this.mostrarDetalles = false;
      this.productos
    }
  }

  
}
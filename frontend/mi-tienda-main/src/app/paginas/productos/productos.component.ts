import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  datos: any;
  selectedProduct: any;

  constructor( private productosService: ProductosService) {
  }
  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(
      data => this.datos = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }
  mostrar(dato: any){
    console.log(dato)
  }

}

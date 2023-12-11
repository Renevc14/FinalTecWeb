import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Product } from 'src/app/product';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{
  // implements OnInit
  @Input() product?: Product;


  constructor(private route: ActivatedRoute ,
    private productosService: ProductosService,
    private location: Location) {}

    ngOnInit() {
      this.getProduct();
    }
    goBack(): void {
      this.location.back();
    }
    getProduct(): void {
      const productoId = String(this.route.snapshot.paramMap.get('id'));
      this.productosService.getProductoById(productoId)
        .subscribe(product => this.product = product);
    }
}

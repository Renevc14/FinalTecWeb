import {Component, EventEmitter, Input, Output,ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() id: string = '';
  @Input() imagen: string = '';
  @Input() nombre: string = '';
  @Input() precio: string = '';
  @Input() tipo: string = '';
  @Input() descripcion: string = '';

  @Output() clic = new EventEmitter<string>();

  
  constructor(private router: Router) {}

  verProducto(): void {
    this.router.navigate(['/productos/producto/', this.id]);
    this.clic.emit(this.id);
  }
 
  // @ViewChild('detallesContainer',{ static: true }) detallesContainer!: ElementRef;
  // mostrarDetalles = false;

  // verProducto(): void {
  //   //cambia el estado de la variable.
  //   this.mostrarDetalles = !this.mostrarDetalles;
  //   // Limpiar el contenedor antes de agregar los nuevos detalles
  //   if (this.mostrarDetalles) {
  //     this.detallesContainer.nativeElement.innerHTML = '';

  //     const descripcionElement = document.createElement('div');
  //     descripcionElement.textContent = `Descripcion: ${this.descripcion}`;


  //     // Agregar elementos al contenedor
  //     this.detallesContainer.nativeElement.appendChild(descripcionElement);
  //   }else{
  //     this.detallesContainer.nativeElement.innerHTML = '';
  //   }
  // }






}





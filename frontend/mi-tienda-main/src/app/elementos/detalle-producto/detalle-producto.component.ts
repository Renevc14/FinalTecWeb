import {Component, EventEmitter, Input, Output,ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() imagen: string = '';
  @Input() nombre: string = '';
  @Input() precio: string = '';
  @Input() descripcion: string = '';

  @ViewChild('detallesContainer',{ static: true }) detallesContainer!: ElementRef;
  mostrarDetalles = false;

  verProducto(): void {
    //cambia el estado de la variable.
    this.mostrarDetalles = !this.mostrarDetalles;
    // Limpiar el contenedor antes de agregar los nuevos detalles
    if (this.mostrarDetalles) {
      this.detallesContainer.nativeElement.innerHTML = '';

      const descripcionElement = document.createElement('div');
      descripcionElement.textContent = `Descripcion: ${this.descripcion}`;


      // Agregar elementos al contenedor
      this.detallesContainer.nativeElement.appendChild(descripcionElement);
    }else{
      this.detallesContainer.nativeElement.innerHTML = '';
    }
  }


}





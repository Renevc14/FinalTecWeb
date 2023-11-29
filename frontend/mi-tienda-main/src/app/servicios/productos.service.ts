import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }
  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  addProducto(nuevoProducto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/producto/add`, nuevoProducto);
  }

  deleteProducto(productoId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/producto/${productoId}`);
  }

  getProductoById(productoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/producto/${productoId}`);
  }

  getProductosByNombre(nombreProducto: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/producto/nombre/${nombreProducto}`);
  }
}

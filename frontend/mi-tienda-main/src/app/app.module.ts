import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import {HttpClientModule} from "@angular/common/http";
import { DetalleProductoComponent } from './elementos/detalle-producto/detalle-producto.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Producto } from '../core/models/producto';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../core/service/producto/producto.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  productos: Producto[] =  []
  constructor(private productoSvc: ProductoService){
  }
  ngOnInit(): void {
    if(this.productos){
      this.getProductos()
    }
  }

  getProductos(){
    this.productoSvc.getProductos().subscribe(response => {
      this.productos =  response;
    })
  }
}

import { Component } from '@angular/core';
import { Producto } from '../core/models/producto';
import { logo, productos } from '../core/img-codificadas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logo:string = logo
  productos: Producto[] = productos
  constructor(){
  }

}

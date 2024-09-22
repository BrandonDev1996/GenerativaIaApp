import { Component } from '@angular/core';
import { stich } from '../core/img-codificadas';
import { Producto } from '../core/models/producto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  stich: Producto = stich
  constructor(){
    console.log(this.stich.nombre)
  }

}

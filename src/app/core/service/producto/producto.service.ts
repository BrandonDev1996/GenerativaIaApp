import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}
  url = "https://http://localhost:8080/producto/api-gestor-de-productos/producto"

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'assets/products.json';  // Aquí debes poner la URL del archivo JSON (o backend si lo tienes)

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar un nuevo producto
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // Eliminar un producto por ID
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Editar un producto (si es necesario)
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }
}


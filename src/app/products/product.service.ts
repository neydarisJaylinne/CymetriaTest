import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private productsList: Product[] = [
  //   { id: 1, name: 'Chaqueta bonita', description: 'Descripcion producto 1', price: 100, imageUrl: 'assets/images/download.jpg', quantity: 8 },
  //   { id: 2, name: 'producto 2', description: 'Descripcion producto 2', price: 200, imageUrl: '../assets/images/Product2.jpeg', quantity: 3 },
  //   { quantity: 3, id: 3, name: 'producto 2', description: 'Descripcion producto 2', price: 200, imageUrl: '../assets/images/Product2.jpeg' },
  //   { id: 1, name: 'producto 1', description: 'Descripcion producto 1', price: 100, imageUrl: '../assets/images/Product1.jpeg', quantity: 8 },
  //   { id: 2, name: 'producto 2', description: 'Descripcion producto 2', price: 200, imageUrl: '../assets/images/Product2.jpeg', quantity: 3 },
  //   { quantity: 3, id: 3, name: 'producto 2', description: 'Descripcion producto 2', price: 200, imageUrl: '../assets/images/Product2.jpeg' }

  // ];

  // getProducts(): Product[] {
  //   return this.productsList;
  // }

  // //traigan producto por el id
  // getProductsById(id: number) : Product | undefined {
  //   return this.productsList.find(resultId => resultId.id === id);
  // }

  // addProduct(newProduct: Product): void{
  //   this.productsList.push(newProduct);
  // }

  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient){

  }

  getProducts(): Observable<Product[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductsById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // getProductsByCategory(category: string): Observable<Product[]>{
  //   return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  // }
}

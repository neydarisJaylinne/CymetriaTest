import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productsList:Product[] = [
  //   {id:1, name: 'producto 1', description: 'Descripcion producto 1', price: 100, imageUrl:'../assets/images/Product1.jpeg'},
  //   {id:2, name: 'producto 2', description: 'Descripcion producto 2', price: 200, imageUrl:'../assets/images/Product2.jpeg'}
  // ];

  // getProducts(): Product[]{
  //   return this.productsList; 
  // }

  // getProductsById(id: number): Product | undefined{
  //   return this.productsList.find(resultProduct => resultProduct.id == id);
  // }

  // addProduct(){

  // }

  // editProduct(){

  // }

  ////CONSUMIENDO UNA API
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductById(id: number): Observable <Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }


}




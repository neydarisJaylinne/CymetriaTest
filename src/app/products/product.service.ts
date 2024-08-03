import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    // private productsList: Product[]=[
    //  {id:1, name:'product 1', description:'description product 1 ', price:100 ,imageUrl:'../assets/images/product1.jpg.crdownload'} 
    // ];

    // getProducts(): Product[]{
    //   return this.productsList;
    // }
    //   getProductsById(id:number): Product | undefined{
    //   return this.productsList.find(Product => Product.id == id);
    // }
    /// consumiendo una API
    private apiUrl ='https://fakestoreapi.com/products';
     constructor(private http:HttpClient){}

     getProducts() : Observable <Product[]>{
      // Get trae datos de un servidor
      return this.http.get<any[]>(this.apiUrl);
     };

     getProductsById(id:number): Observable<Product>{
      return this.http.get<Product>(`${this.apiUrl}/${id}`);
     };
  
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any = [];
  constructor() { }

  addToCart(product: any): void {
    this.items.push(product);
    console.log(this.items);
  }
  //traer todos los items
  getItems() {
    return this.items;
  }
  //eliminar todos los items (limpiar carrito)
  clearCart() {
    return this.items = [];
  }
  deleteProduct(item: any) {
    var index = this.items.findIndex((product: any) => item === product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

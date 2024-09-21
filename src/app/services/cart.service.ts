import { Injectable } from '@angular/core';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  constructor() { }

  // Método para agregar un producto al carrito
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Obtener todos los productos del carrito
  getItems() {
    return this.items;
  }

  // Limpiar el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }
}

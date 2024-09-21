import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: any;
  constructor(private cartService: CartService) {

  }
  ngOnInit() {
    //aca se cargan los items al abrir el componente carrito
    this.items = this.cartService.getItems();
  }
  cleanCart(){
    this.items= this.cartService.clearCart();
  }
  deleteProduct(item: any){
    this.cartService.deleteProduct(item);
    this.items = this.cartService.getItems();
  }
}

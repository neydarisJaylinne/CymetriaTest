import { Component } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  items: any;
  constructor(private cartService: CartService) {

  }
  ngOnInit(){
    this.items = this.cartService.getItems();
  }
}

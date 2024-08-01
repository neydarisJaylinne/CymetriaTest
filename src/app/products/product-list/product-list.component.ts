import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productId!: number;
  selectedProduct: Product | undefined;
  productList: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }
  // Instrucciones al iniciar el componente
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }
  // Obtener el producto por ID
  getProductById() {
    console.log("geting...");
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(data => {
        this.selectedProduct = data;
      });
    }
  }
  // Agregar al carrito el producto seleccionado
  addToCart(product: any) {
    console.log('agregado: ' + product.title);
    this.cartService.addToCart(product);
    window.alert('Agregaste el producto: ' + product.title)
  }

}

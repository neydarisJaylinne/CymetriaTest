import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product.model';
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
  selectedProduct!: Product | undefined ;
  productList: Product[] =[];
  // constructor (private productService: ProductService, private cartService: CartService){}

  // ngOnInit():void{
  //   this.productList = this.productService.getProducts();
  // }

  // addToCart(product: any){
  //   console.log('agregado:'+ product.name);
  //   this.cartService.addToCart(product);
  //   window.alert('Agregaste el producto :' + product.name)
  // }
  // getProductsById(){
  //   if(this.productId){
  //      this.productService.getProductsById(this.productId);
  //   }
    
  // }


   constructor(private ProductService: ProductService, private cartService: CartService){}
  
   ngOnInit(): void {
     this.ProductService.getProducts().subscribe((data: Product[]) =>{
       this.productList =data;
     })
   }

    getProductById(){
      if (this.productId){
        this.ProductService.getProductsById(this.productId).subscribe(data =>{
            this.selectedProduct = data;
        });
      }
    }

    addToCart(product: any){
       console.log('agregado:' + product.name);
       this.cartService.addToCart(product);
       window.alert('Agregaste el produco' + product.name)
    }
}


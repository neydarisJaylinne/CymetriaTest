import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productList: Product[] = [];
  findedProduct: Product | undefined;
  id!: number;
  constructor(private productService: ProductService, private cartService: CartService) {
  }

  // ngOnInit(): void {
  //   //traer los productos para que se visualicen apenas cargue mi pagina
  //   // this.addNewProduct();
  //   this.productList = this.productService.getProducts();
  //   console.log(this.productList);
  //   this.getProductById();
  // }

  // getProductById(): void {
  //   this.findedProduct = this.productService.getProductsById(this.id);
  //   console.log(this.id);
  //   if (!this.findedProduct) {
  //     console.log('producto no encontrado');
  //   }
  //   console.log(this.findedProduct);
  // }

  // addNewProduct(): void {
  //   const newProduct: Product = { id: 4, name: 'prodNew', description: 'hgfuirgyh', price: 23, imageUrl: 'tyrytfhjb', quantity: 2 };
  //   this.productService.addProduct(newProduct);
  // }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }

  getProductById(){
    this.productService.getProductsById(this.id).subscribe((data: Product) => {
      this.findedProduct = data;
    });
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    console.log('agregó ;) ;)')
    window.alert('Se agregó el producto ' + product.name)
  }


}

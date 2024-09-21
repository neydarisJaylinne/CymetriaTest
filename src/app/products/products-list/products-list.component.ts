<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
//import { ProductServiceService } from '../product-service.service';
import { Product } from 'src/app/models/products.models'; // Asegúrate de que el modelo Product está bien definido
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FotterComponent } from 'src/app/fotter/fotter.component';
=======
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4

@Component({
  selector: 'app-products-list',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: Product[] = []; // Lista de productos
  findedProduct: Product | undefined; // Producto encontrado, o undefined si no se encuentra
  id: number = 1; // ID inicial para pruebas, asegúrate de asignar un valor adecuado o capturarlo de otro lugar
  cartService: any;

  constructor(private productService: ProductService) { }
=======
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
>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }

<<<<<<< HEAD
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }



  // addNewProduct(): void {
  //    const newProduct: Product = { id: 4, name: 'prodNew', description: 'hgfuirgyh', price: 23, imageurl: 'tyrytfhjb', quantity: 2 };
  //    this.productService.addProduct(newProduct);
  // }  

=======
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


>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4
}

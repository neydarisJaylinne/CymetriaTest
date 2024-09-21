import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
//import { ProductServiceService } from '../product-service.service';
import { Product } from 'src/app/models/products.models'; // Asegúrate de que el modelo Product está bien definido
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FotterComponent } from 'src/app/fotter/fotter.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
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

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }



  // addNewProduct(): void {
  //    const newProduct: Product = { id: 4, name: 'prodNew', description: 'hgfuirgyh', price: 23, imageurl: 'tyrytfhjb', quantity: 2 };
  //    this.productService.addProduct(newProduct);
  // }  

}

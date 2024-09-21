import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: "", component: ProductsListComponent},
    { path: 'cart', component: CartComponent },  // Nueva ruta para el carrito
    { path: 'form', component: FormularioComponent }
];

import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: "", component: ProductsListComponent},
    { path: 'cart', component: CartComponent },  // Nueva ruta para el carrito
    { path: 'form', component: FormularioComponent }
=======
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

export const routes: Routes = [
    {
        path: "home",
        component: ProductsListComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "checkout",
        component: CheckoutComponent
    }
>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4
];

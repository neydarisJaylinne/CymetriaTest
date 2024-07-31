import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any = [];
    constructor() { }

    addToCart(product : any){
      this.items.push(product);

    }

    getItems(){
      console.log("traje items")
      return this.items;
    }

    deleteItem(product: any){
      const index = this.items.findIndex((item: any) => item === product);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }

    clearCart(){
      this.items = [];
      return this.items;
    }

  // ////USO DE LOCAL STORAGE
  // // No cambia la logica del resto proyecto porque cada metodo retorna el misto tipo de dato que en los metodos pasados
  // private storageKey = 'cartItems';

  // addToCart(product: any) {
  //   //Llama getItems() para agregar a la data actual la informacion del nuevo producto agregado
  //   const items = this.getItems();
  //   items.push(product);
  //   //envia al LS como texto plano JSON
  //   localStorage.setItem(this.storageKey, JSON.stringify(items));
  // }
  // getItems() {
  //  const items = localStorage.getItem(this.storageKey);
  //  // ? => si no es vacio o null, : [] => si no retorne un array vacio
  //  //JSON.parse(items) => Trae texto plano JSON y lo convierte en un objeto
  //   return items ? JSON.parse(items) : [];
  // }
  // clearCart() {
  //   localStorage.removeItem(this.storageKey);
  //   return [];
  // }
}

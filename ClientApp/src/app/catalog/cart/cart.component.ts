import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';


import { Product } from '../models/product.model' ;

import { RemoveProduct } from "../actions/product.action" ;
import { ProductState } from "../states/product.state" ;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Observable<Product[]>;
  add: number = 0 ;
  cartValue: number = 0;

  constructor(private productStore: Store) { }

  ngOnInit(): void {

    this.cart = this.productStore.select(state => state.products.products);
    this.cart.subscribe({
      next: this.computeCart
    });
  }

  computeCart(cart: Product[]){
    let totalPrice = 0 ;
    cart.forEach(lm => {
      totalPrice += lm.price ;
    });
    console.log(totalPrice) ;
  }

  removeFromCart(product:Product):void{
    document.getElementById("pe_"+product.id).parentElement.classList.add("remove");

    var self = this;
    setTimeout(function(){
      self.productStore.dispatch( new RemoveProduct(product));
    }, 800);
  }

}

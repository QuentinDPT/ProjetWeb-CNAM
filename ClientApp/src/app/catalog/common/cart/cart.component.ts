import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model' ;
import { Store } from "@ngxs/store";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Observable<Product[]> ;

  constructor(private cartStore: Store) { }

  ngOnInit(): void {
    this.cart = this.cartStore.select(state => state.cart.items);
  }

}

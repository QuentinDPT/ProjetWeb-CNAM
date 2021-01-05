import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model' ;
import { Store } from "@ngxs/store";

import { AddProduct } from "../../actions/product.action" ;

@Component({
  selector: 'product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.scss']
})
export class ProductElementComponent implements OnInit {
  @Input() product: Product;

  add: number = 0;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.add = 0 ;
  }

  addToCart(){
    this.add = 0 ;
    this.store.dispatch( new AddProduct(this.product));
    this.add = 1 ;
    var self = this;
    setTimeout(function(){ self.add = 0 }, 300);
  }
}

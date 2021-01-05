import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from "@ngxs/store";
import { Observable, Subscription } from 'rxjs';

import { ProductsService } from './../services/products.service';

import { Product } from '../models/product.model' ;
import { ProductState } from '../states/product.state' ;

import { AddProduct } from "../actions/product.action" ;


@Component({
  selector: 'app-products',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

    product: Product;
    sub : Subscription;
    add: number;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private store: Store) {

  }

  ngOnInit(): void {
    var _product : Observable<Product> ;


    this.route.paramMap.subscribe(params => {
      let id : number = Number(params.get('id'));
      _product = this.productsService.getProductById(id);
      this.sub = _product.subscribe(val => this.product = val);
    });

  }

  ngOnDestroy():void{
    this.sub.unsubscribe;
  }

  addToCart(){
    this.add = 0 ;
    this.store.dispatch( new AddProduct(this.product));
    this.add = 1 ;
    var self = this;
    setTimeout(function(){ self.add = 0 }, 300);
  }
}

import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../services/products.service';

import { Product } from '../../../models/product.model' ;
import { ProductState } from '../states/product.state' ;

import { ProductElementComponent } from "./product-element/product-element.component" ;

import { Store } from "@ngxs/store";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  allProducts: Observable<Product[]>;

  constructor(private dataService: ProductsService, private store: Store) {
    this.allProducts = this.dataService.getProducts() ;
  }

  ngOnInit(): void {
    console.log(this.allProducts);
  }

}

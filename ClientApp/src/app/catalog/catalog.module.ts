import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './services/products.service' ;

import { ProductCatalogComponent } from './product-catalog/products-catalog.component' ;
import { ProductElementComponent } from './product-catalog/product-element/product-element.component' ;
import { ProductDetailComponent } from './product-detail/products-detail.component' ;
import { CartComponent } from './cart/cart.component' ;

import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [
    ProductCatalogComponent,
    ProductDetailComponent,
    CartComponent,
    ProductElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CatalogRoutingModule
  ],
  providers: [ProductsService]
})
export class CatalogModule { }

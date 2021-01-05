import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { ProductCatalogComponent } from './product-catalog/products-catalog.component';
import { ProductDetailComponent } from './product-detail/products-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductCatalogComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule { }

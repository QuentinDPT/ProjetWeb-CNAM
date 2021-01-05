import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component' ;

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(
        m => m.AccountModule
      )
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then(
        m => m.CatalogModule
      )
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

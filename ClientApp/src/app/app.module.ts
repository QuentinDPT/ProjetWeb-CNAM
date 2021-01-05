import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './common/components/navigation/navigation.component';

import { SearchComponent } from './search/search.component';

import { CatalogModule } from "./catalog/catalog.module" ;

import { ProductState } from './catalog/states/product.state';
import { SigninComponent } from './signin/signin.component' ;

import { LoginService } from '../services/login.service' ;

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CatalogModule,
    NgxsModule.forRoot([
      ProductState
    ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

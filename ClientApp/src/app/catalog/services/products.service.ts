import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';


@Injectable()
export class ProductsService {
  constructor(private http : HttpClient) { }

  public getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL + "/products") ;
  }

  public getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(map( items => {
      return items.find( i => i.id == id );
    }));
  }
}

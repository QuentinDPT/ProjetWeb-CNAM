import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable()
export class LoginService {
  constructor(private http : HttpClient) { }

  public login(login: string, password: string) : Observable<any> {
    return this.http.post<any>(environment.API_URL + "/user/login", {login:login, password:password}) ;
  }
}

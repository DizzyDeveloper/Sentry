import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  login(email, password): Observable<boolean> {
    return this.http.post('api/account/login', { email: email, password: password}, { observe: 'response' })
    .map( response => {       
      console.log(response);
     // let token = obj["token"];
     //sessionStorage.auth_token = token;
     
      return true 
    });  
  }

  logout(): void {

  }
}

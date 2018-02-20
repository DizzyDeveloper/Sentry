import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Registration } from '../models/user/registration';
import { ProfileInfo } from '../modules/home/models/user/profileInfo';

@Injectable()
export class AccountService {


  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<ProfileInfo> {
    return this.http.get<ProfileInfo>("api/account/profile");
  }

  login(email, password): Observable<boolean> {
    return this.http.post('api/account/login', { email: email, password: password}, { observe: 'response' })
    .map( response => {      
      
      if(response.status === 200){
        var token = response.body["token"];  
        sessionStorage.setItem("auth_token", token);        
        return true; 
      }
      return false;
     
    });  
  }

  register(registration: Registration): Observable<boolean> {
    return this.http.post('api/account/register', registration, { observe: 'response' })
    .map( response => { return true }); 
  }

  logout(): void {
    sessionStorage.removeItem("auth_token");
  }

  getAuthToken(): string {
    return sessionStorage.getItem("auth_token");
  }

  isUserLoggedIn(): boolean{
    if(sessionStorage.getItem("auth_token") === null){
      return false;
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User, UserRegister} from "./models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  login(formData: any){
    return this.http.post<any>(`${environment.apiUrl}api/core/login/`, formData)
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['pages/dashboard']).catch();
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  register(userData:User){
    return this.http.post<User>(`${environment.apiUrl}api/core/user-task/`, userData)
  }
}

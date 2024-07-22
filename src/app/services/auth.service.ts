import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) {}

  setToken(token : string){
    localStorage.setItem('token',token)
  }

  getToken() : string | null{
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken() != null
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  login({email, password} : any) : Observable<any>{
    if(email == 'suyogch3300@gmail.com' && password == '12345'){
      this.setToken('abcdefghijkelslsl');
      return of({name : 'ssc', email : 'suyogch3300@gmail.com'})
    }
    return throwError(new Error('Failed to login'))
  }
}

// login.service.ts

import { Injectable } from '@angular/core';
import { Log } from '../model/log';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  private baseUrl: string = 'https://localhost:7205/api/User/';
  private userPayload:any;
  constructor(private http: HttpClient, private router: Router) {
    
   }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  signIn(loginObj : any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }

  onLogin(user: Log): boolean {
    // التحقق مما إذا كانت user.username و user.password تتطابق مع القيم المتوقعة
    return user.username === "admin" && user.password === "admin";
  }
}

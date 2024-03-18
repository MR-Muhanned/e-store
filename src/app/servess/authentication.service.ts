import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string = 'https://api.example.com'; // استبدلها بعنوان API الفعلي

  constructor(private http: HttpClient) {}

  register(formData: any): Observable<any> {
    const registrationUrl = `${this.apiUrl}/register`; // استبدلها بعنوان API الفعلي
    return this.http.post(registrationUrl, formData);
  }
}

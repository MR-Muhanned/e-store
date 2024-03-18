import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  private apiUrl = 'https://localhost:7205/api/stars'; // تأكد من استبدالها برابط الخدمة الفعلي

  constructor(private http: HttpClient) { }

  getReviewsByProductId(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/product/${productId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetelsService {

  constructor(private http: HttpClient) { }

  getproductById(productId: number) {
    // قم بتحديد الرابط الذي يحتوي على تفاصيل المنتج مع الهوية
    const apiUrl = `https://localhost:7205/api/Products/${productId}`;
    
    
    // استخدام HttpClient لإرسال طلب GET إلى الرابط المحدد
    return this.http.get(apiUrl);
  }



  getimagID(imagID: number) {
    // قم بتحديد الرابط الذي يحتوي على تفاصيل المنتج مع الهوية
    const apiUrl = `https://localhost:7205/api/ListImgs/${imagID}`;
    
    
    // استخدام HttpClient لإرسال طلب GET إلى الرابط المحدد
    return this.http.get(apiUrl);
  }

 
}

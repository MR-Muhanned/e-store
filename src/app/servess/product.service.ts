import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://localhost:7205/api/Products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?categoryId=${categoryId}`);
  }


  
  getCategoriespr(keyword: Product): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`+keyword);
  }



  getProductsByTitle(title: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?title=${title}`);
  }

  

 
 //// هذه الدوال كلها تنفذ بصفة الادم  //////

  // اضافة منتج 
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  ///  حذف منتج
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

  // تحديث منتج
  updateProduct(product: Product): Observable<Product> {
    const updateUrl = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(updateUrl, product);
  }

  ///////   نهاية دوال الادمن /////////////
 
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7205/api/Categories';

  constructor(private http: HttpClient) {}
  

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
 
  getCategoryById(categoryId: number): Observable<Category> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.get<Category>(url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<any>(this.apiUrl, category)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCategory(category: Category): Observable<Category> {
    const url = `${this.apiUrl}/${category.id}`;
    return this.http.put<any>(url, category)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCategory(categoryId: number): Observable<void> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Category): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something went wrong; please try again later.');
  }




  
  getCategoriespr(keyword:string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`+keyword);
  }


}

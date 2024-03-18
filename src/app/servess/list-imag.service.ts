import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../model/Image';

@Injectable({
  providedIn: 'root',
})
export class ListImagService {
  private apiUrl = 'https://localhost:7057/api/ListImgs';

  constructor(private http: HttpClient) {}

  getListImages(): Observable<Image[]> {
    return this.http.get<[Image]>(this.apiUrl);
  }
}
// 
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HederService {

  constructor() { }
  private searchSubject = new BehaviorSubject<string>('');
  public search$ = this.searchSubject.asObservable();

  setSearchTerm(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }
}

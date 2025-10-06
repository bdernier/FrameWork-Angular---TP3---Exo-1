import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}/users`)
      .pipe(catchError((err) => throwError(() => new Error('Erreur users'))));
  }
}

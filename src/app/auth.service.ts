import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
  return this.http.post<any>(this.apiUrl, { username, password }).pipe(
    map((response: { success: any; }) => response.success),
    catchError(() => of(false))
  );
}


  logout() {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}


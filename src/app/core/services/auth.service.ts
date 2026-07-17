import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {

    if (email === 'admin@gmail.com' && password === '1234') {

      // mock JWT token
      localStorage.setItem('auth_token', 'mock-token-12345');

      return true;
    }

    return false;
  } 

  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string): void {
    // Implement authentication logic here
    // For demo purposes, let's assume successful login
    if (username === 'user' && password === 'password') {
      // Successful login
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } else {
      // Failed login
      alert('Invalid username or password');
    }
  }

  register(username: string,email:string, password: string): void {
    // Implement user registration logic here
    alert('User registration is not implemented yet');
  }

  logout(): void {
    // Implement logout logic here
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    // Check if user is authenticated
    return this.isLoggedIn;
  }
}

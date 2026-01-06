import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() {}

  Login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email === 'user@gmail.com' && password === 'user123') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}

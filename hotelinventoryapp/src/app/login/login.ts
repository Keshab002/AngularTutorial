import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hover } from '../hover';
import { Router } from '@angular/router';
import { EmailValidator } from '../email-validator';
import { JsonPipe } from '@angular/common';
import { LoginService } from './login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Hover, EmailValidator, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  loginSuccess: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}
  onClose() {
    alert('Please Login to continue');
  }

  onLogin() {
    if (this.loginService.Login(this.email, this.password)) {
      this.router.navigate(['/rooms']);
    }
    // OR
    // this.router.navigateByUrl('/rooms');
  }
}

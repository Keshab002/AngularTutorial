import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { LoginService } from '../login/login-service';

export const authMatchGuard: CanMatchFn = (route, segments) => {
  return inject(LoginService).isLoggedIn;
};

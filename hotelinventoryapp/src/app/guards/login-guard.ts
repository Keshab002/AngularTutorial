import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login-service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService);
  const router = inject(Router);

  return auth.isLoggedIn ? true : router.navigate(['/login']);
};

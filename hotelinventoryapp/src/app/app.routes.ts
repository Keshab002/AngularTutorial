import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { NotFound } from './not-found/not-found';
import { Login } from './login/login';
import { loginGuard } from './guards/login-guard';
import { authMatchGuard } from './guards/auth-match-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'employees',
    component: Employee,
    canActivate: [loginGuard],
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms-routing-module').then((m) => m.Roomroutes),
    canActivate: [loginGuard],
    canMatch: [authMatchGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
  },
];

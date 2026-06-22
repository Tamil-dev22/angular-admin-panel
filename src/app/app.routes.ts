import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { UserList } from './features/users/user-list/user-list';
import { UserForm } from './features/users/user-form/user-form';
import { authGuard } from './core/guards/auth-guard';
import { loginGuard } from './core/guards/login-guard';
export const routes: Routes = [

  // default route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // public route
  {
    path: 'login',
    component: Login,
     canActivate: [loginGuard]
  },

  // protected routes
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  {
    path: 'users',
    component: UserList,
    canActivate: [authGuard]
  },

  {
    path: 'users/add',
    component: UserForm,
    canActivate: [authGuard]
  },

  {
    path: 'users/edit/:id',
    component: UserForm,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
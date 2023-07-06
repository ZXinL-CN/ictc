import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const canActivateLogin: CanActivateFn = async (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  if (await inject(AuthService).isLoggedIn()) {
    return Promise.resolve(true);
  }
  return Promise.resolve(router.parseUrl('/login'));
}

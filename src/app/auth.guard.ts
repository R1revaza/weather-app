import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);

  if (service.isLogged()) {
    console.log('User is logged in.');
    return true;
  } else {
    console.log('User is not logged in.');
    router.navigate(['/login']);
    return false;
  }
};

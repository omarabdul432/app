import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const loggedUser = localStorage.getItem('user')

  if (!loggedUser) {
    router.navigateByUrl('signin')
    return false
  } else {
    return true;
  }
};

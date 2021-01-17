/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: SignIn Guard
 */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  /**
   *
   * @param router Router
   * DI Router
   */
  constructor(private router: Router) {}

  /**
   *
   * @param next ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

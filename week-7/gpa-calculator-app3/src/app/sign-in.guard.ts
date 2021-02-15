/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Date: 14 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Sign In Guard
 *     Logic to protect access access to client side router,
 *     in this case secure route access to logged in users.
 */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  /**
   *
   * @param router
   * @param cookieService
   *
   * Make router and cookieService available to SignInGuard
   */
  constructor(private router: Router, private cookieService: CookieService) {}

  /**
   *
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   *
   * validates if user is logged in based on token name session_user
   * redirect user to sign in component if not logged in
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      // redirect to the sign-in page and return false
      this.router.navigate(['session/sign-in']);
      return false;
    }
  }
}

/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 15 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Base Layout Component
 *      Component contains navbar with sign out logic
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  // variable of type string
  assignment: string;

  /**
   *
   * @param cookieService CookieService
   * @param router Router
   *
   */
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {}

  /**
   * Remove all cookie
   * Redirect to sign in component
   */
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['./session/sign-in']);
  }
}

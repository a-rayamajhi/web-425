/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: SignIn Component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn: boolean = false;

  /**
   *
   * @param router Router
   *
   * DI Router
   */
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Method responsible for
   * Navigating to home component
   */
  signIn() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}

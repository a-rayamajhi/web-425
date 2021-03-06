/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 14 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Sign In Component with Reactive Form,
 *     Logic to validate and access form and payload
 *     Logic to store cookie
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  /**
   * initiate form with json with empty studentId
   */
  ngOnInit(): void {
    this.signinForm = this.fb.group({ studentId: '' });
  }

  /**
   * Get the payload from the form
   * validate student id
   * create browser cookie if the student Id is valid
   * If student ID is invalid throw error
   */
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage =
        'The student ID you entered is invalid, please try again.';
    }
  }
}

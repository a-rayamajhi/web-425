/**
 * Title: sign-in.service.ts
 * Author: Professor Krasso
 * Date: 14 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Sign In Service Module
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  /**
   *
   * @param studentId number
   *
   * Return studentId from studentIds array that matches studentId parameter
   */
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}

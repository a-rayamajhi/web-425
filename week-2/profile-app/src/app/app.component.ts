/**
 * Title: Exercise 2.3
 * Author: Professor Krasso
 * Date: 9 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Data Binding
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}

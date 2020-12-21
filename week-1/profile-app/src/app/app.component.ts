/**
 * Title: Exercise 1.5
 * Author: Professor Krasso
 * Date: 20 December 2020
 * Modified By:  Anil Rayamajhi
 * Description: Components
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}

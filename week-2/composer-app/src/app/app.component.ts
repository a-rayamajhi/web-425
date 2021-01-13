/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 10 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Base App Component
 */

import { Component } from '@angular/core';

/**
 * Component Definition
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // AppComponent Payloads
  title: string = 'Composer App';
  assignment: string = 'Assignment 2.4 - Routing in Action';
}

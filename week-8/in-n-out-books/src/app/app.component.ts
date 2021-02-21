/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 20 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: App Component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}

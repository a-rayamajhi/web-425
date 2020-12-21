/**
 * Title: Exercise 1.3
 * Author: Professor Krasso
 * Date: 20 December 2020
 * Modified By:  Anil Rayamajhi
 * Description: Angular CLI, app Business logic
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Anil Rayamajhi's World!!"
}

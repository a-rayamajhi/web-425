/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Home Components
 */

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  assignment: string = 'Exercise 3.3 - Passing Data to Routes, Part 2';

  /**
   *
   * @param route ActivatedRoute
   */
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }

  ngOnInit(): void {}
}

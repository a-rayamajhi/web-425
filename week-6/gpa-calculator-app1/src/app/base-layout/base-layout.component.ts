/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 6 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Base Layout Component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  // variable of type string
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {}
}

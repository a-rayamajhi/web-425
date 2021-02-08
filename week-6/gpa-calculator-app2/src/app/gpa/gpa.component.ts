/**
 * Title: grade-summary.component.ts
 * Author: Professor Krasso
 * Date: 7 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Grade Summary Component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent implements OnInit {
  // Input to grab gpa from parent home component
  @Input() gpaTotal!: number;

  constructor() {}

  ngOnInit(): void {}
}

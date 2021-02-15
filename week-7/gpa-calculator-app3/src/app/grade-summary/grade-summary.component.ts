/**
 * Title: grade-summary.component.ts
 * Author: Professor Krasso
 * Date: 7 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Grade Summary Component,
 *    Course and Grade List
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  // Get grade and course from home component
  @Input() grade!: string;
  @Input() course!: string;

  constructor() {}

  ngOnInit(): void {}
}

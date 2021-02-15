/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 15 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Home Component,
 *    Includes logics to save transcript,
 *    Reactive Form
 *    Calculate GPA and reset transcript builder
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Array of string for select option
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  // property to accumulate all user entered grades per course
  transcriptEntries: Array<ITranscript> = [];
  // property to store calculated GPA
  gpaTotal: number = 0;
  transcriptForm!: FormGroup;

  /**
   *
   * @param fb FormBuilder
   */
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  /**
   * Helper function to return the transcript forms controls.
   */
  get form() {
    return this.transcriptForm.controls;
  }

  /**
   * save transcriptEntry to transcriptEntries Array.
   * Reset Validation after submit
   */
  onSubmit(event: any) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value,
    });
    event.currentTarget.reset();
  }

  /**
   * Description: accumulate gpa of all the courses exist in
   * transcriptEntries array based on their assigning respective weight.
   * Calculate average gpa
   */
  calculateResults() {
    let gpa: number = 0;

    for (let transcriptEntry of this.transcriptEntries) {
      switch (transcriptEntry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        default:
          gpa += 0.0;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  /**
   * Reset transcript entires and calculated GPA
   */
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}

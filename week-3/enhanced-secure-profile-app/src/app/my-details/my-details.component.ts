/**
 * Title: my-details.component.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: My Details Component
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`Full Name: ${this.fullName}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person('Anil Rayamajhi', 'Mo:Mo:', 'Pacific Blue');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}

/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 10 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Composer List Logic
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Kurt Cobain', 'Alternative/Rock'),
      new Composer('Paul McCartney', 'Classic rock'),
      new Composer('Billie Joe Armstrong', 'Punk'),
      new Composer('John Lennon', 'Classic Rock'),
      new Composer('Tom Petty', 'Country'),
    ];
  }

  ngOnInit(): void {}
}

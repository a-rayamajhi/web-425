/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Composer List Logic
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

/**
 * Component Definition
 */
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  /**
   * composer with type Array of Composer type
   */
  composers: Array<IComposer>;

  constructor() {
    // Instances of Composer Object
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}

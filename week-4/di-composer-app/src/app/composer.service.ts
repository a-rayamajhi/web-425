/**
 * Title: composer.class.ts
 * Author: Professor Krasso
 * Date: 24 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Composer Service Class
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      { composerId: 100, fullName: 'Kurt Cobain', genre: 'Alternative/Rock' },
      {
        composerId: 101,
        fullName: 'Paul McCartney',
        genre: 'Classic rock',
      },
      {
        composerId: 102,
        fullName: 'Billie Joe Armstrong',
        genre: 'Punk',
      },
      { composerId: 103, fullName: 'John Lennon', genre: 'Classic Rock' },
      { composerId: 104, fullName: 'Tom Petty', genre: 'Country' },
    ];
  }

  /**
   * Method to get all composers
   */
  getComposers() {
    return this.composers;
  }

  /**
   *
   * @param composerId number
   *
   * Method to get composer matching parameter Id
   */
  getComposer(composerId: number): any {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

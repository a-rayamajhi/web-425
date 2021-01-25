/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 24 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Composer List Logic
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from './../composer.service';

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

  /**
   *
   * @param composerService ComposerService
   */
  constructor(private composerService: ComposerService) {
    // Instances of Composer Object
    this.composers = composerService.getComposers();
  }

  ngOnInit(): void {}
}

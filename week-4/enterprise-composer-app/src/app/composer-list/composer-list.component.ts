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
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  composers: Observable<IComposer[]>;
  // Instance of Form Control with default value set to empty string
  txtSearchControl = new FormControl('');

  /**
   *
   * @param composerService ComposerService
   */
  constructor(private composerService: ComposerService) {
    // Instances of Composer Object
    this.composers = composerService.getComposers();

    // Subscribe txtSearchControl value change event
    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val));
  }

  ngOnInit(): void {}

  /**
   *
   * @param name string
   *
   * Description: Alert parameter.
   */
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}

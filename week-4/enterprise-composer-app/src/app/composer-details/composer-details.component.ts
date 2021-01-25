/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 24 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Composer Detail page
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from './../composer.service';
import { IComposer } from '../composer.interface';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})

/**
 * Note: `!` is used to fix build warnings related to strict nul|undefined checks
 *
 * https://stackoverflow.com/questions/65053723/angular-typescript-type-string-undefined-is-not-assignable-to-type-st
 */
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer!: IComposer;

  /**
   *
   * @param route ActivatedRoute
   * @param composerService ComposerService
   */
  constructor(
    private route: ActivatedRoute,
    private composerService: ComposerService
  ) {
    this.composerId = parseInt(route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}

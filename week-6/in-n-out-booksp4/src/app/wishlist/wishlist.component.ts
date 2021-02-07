/**
 * Title: wishlist.component.ts
 * Author: Professor Krasso
 * Date: 5 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Wishlist Component
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   *
   * @param item IWishlistItem
   */
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}

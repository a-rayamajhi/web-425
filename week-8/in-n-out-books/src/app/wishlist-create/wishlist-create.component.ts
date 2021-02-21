/**
 * Title: wishlist-create.component.ts
 * Author: Professor Krasso
 * Date: 5 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Wishlist Create Component
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from './../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  // output statement named addItemEmitter of type EventEmitter<IWishlistItem>
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  // items property of type IWishlistItem
  item: IWishlistItem;

  constructor() {
    // instance of the IWishlistItem object
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  // handler to add item to wishlist items array
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });
    // reset item object
    this.item = {} as IWishlistItem;
  }
}

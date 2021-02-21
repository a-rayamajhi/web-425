/**
 * Title: book-list.component.ts
 * Author: Professor Krasso
 * Date: 21 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Book List Component
 */

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from './../books.service';
import { MatDialog } from '@angular/material/dialog';

import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook> = [];
  book: IBook;

  /**
   *
   * @param booksService BooksService
   * @param dialog MatDialog
   */
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // subscribe to books service getBooks
    booksService.getBooks().subscribe((res) => {
      // loop over the response data object
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          // mutate books array with response payload
          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  /**
   *
   * @param isbn string
   *
   * Description: Identify clicked book,
   * load book in BookDetailsDialogComponent Modal
   */
  showBookDetails(isbn: string) {
    // find book by isbn in books property
    this.book = this.books.find((book) => book.isbn === isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });

    // Subscribe to dialog state
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}

/**
 * Title: book-list.component.ts
 * Author: Professor Krasso
 * Date: 31 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Book List Component
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books!: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book!: IBook;

  /**
   *
   * @param booksService BooksService
   */
  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks();
  }

  ngOnInit(): void {}

  /**
   *
   * @param isbn string
   *
   * identify clicked book
   */
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    console.log(this.book);
  }
}

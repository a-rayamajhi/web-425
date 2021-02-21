/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 21 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Book Service
 *    Http call to get books based on provided isbns
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  isbns: Array<string>;

  /**
   *
   * @param http HttpClient
   *
   * assign string array to isbns
   */
  constructor(private http: HttpClient) {
    this.isbns = [
      '0345339681',
      '0261103571',
      '9780593099322',
      '9780261102361',
      '9780261102378',
      '9780590302715',
      '9780316769532',
      '9780743273565',
      '9780590405959',
    ];
  }

  /**
   * Get array of books from openlibrary
   */
  getBooks() {
    // instance of HttpParams
    let params = new HttpParams();

    // build http request params
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    // http service to make get request
    return this.http.get('https://openlibrary.org/api/books', {
      params,
    });
  }
}

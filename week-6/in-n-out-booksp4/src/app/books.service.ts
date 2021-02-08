/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 31 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Book Service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // books property of type Array<IBook>
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9781617295348',
        title: 'Angular Development with TypeScript',
        authors: ['Yakov Fain', 'Anton Moiseev'],
        description:
          'Angular Development with TypeScript, Second Edition is an intermediate-level tutorial that introduces Angular and TypeScript to developers comfortable with building web applications using other frameworks and tools.',
        numOfPages: 1,
      },
      {
        isbn: '9781942788003',
        title: 'The DevOps Handbook',
        authors: ['Gene Kim', 'Jez Humble', 'Patrick Debois', 'John Willis'],
        description:
          'This book was created for anyone who wants to make serious changes through the DevOps methodology to increase productivity, profitability, and win in the marketplace. It is an all-inclusive guide for planning and executing DevOps transformations while providing background on the history of DevOps and dozens of case studies to support DevOps principles. It also provides best practices to help organizations unite disparate teams, achieve common goals, and obtain support from the highest levels of leadership.',
        numOfPages: 480,
      },
      {
        isbn: '9781449358068',
        title: 'RESTful Web APIs',
        authors: ['Mike Amundsen', 'Sam Ruby', 'Leonard Richardson'],
        description:
          'The popularity of REST in recent years has led to tremendous growth in almost-RESTful APIs that don’t include many of the architecture’s benefits. With this practical guide, you’ll learn what it takes to design usable REST APIs that evolve over time. By focusing on solutions that cross a variety of domains, this book shows you how to create powerful and secure applications, using the tools designed for the world’s most successful distributed computing system: the World Wide Web.',
        numOfPages: 371,
      },
      {
        isbn: '9780321826626',
        title: 'NoSQL Distilled',
        authors: ['Pramod Sadalage ', 'Martin Fowler'],
        description:
          'The need to handle increasingly larger data volumes is one factor driving the adoption of a new class of nonrelational “NoSQL” databases. Advocates of NoSQL databases claim they can be used to build systems that are more performant, scale better, and are easier to program.',
        numOfPages: 234,
      },
      {
        isbn: '9781942788003',
        title: 'MongoDB: The Definitive Guide',
        authors: ['Kristina Chodorow'],
        description:
          "How does MongoDB help you manage a huMONGOus amount of data collected through your web application? With this authoritative introduction, you'll learn the many advantages of using document-oriented.",
        numOfPages: 432,
      },
    ];
  }

  /**
   * Get array of books
   */
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  /**
   *
   * @param isbn string
   *
   * Get Book that matches the isbn number
   */
  getBook(isbn: string): IBook | any {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}

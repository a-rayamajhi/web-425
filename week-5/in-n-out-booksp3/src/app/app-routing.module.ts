/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 31 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Routing Module
 */

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';

/**
 * Declare Routes here
 */
const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

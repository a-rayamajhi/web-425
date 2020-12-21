/**
 * Title: Exercise 1.3
 * Author: Professor Krasso
 * Date: 20 December 2020
 * Modified By:  Anil Rayamajhi
 * Description: Angular CLI
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

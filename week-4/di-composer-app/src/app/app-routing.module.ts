/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

/**
 * Routes Declaration
 * Wire with Respective Components
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full',
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

/**
 * Import RouterModule encapsulating
 * above declared routes
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * Export Routing Components to
 * access from app Module
 */
export const RoutingComponents = [
  ComposerListComponent,
  ContactComponent,
  AboutComponent,
  ComposerDetailsComponent,
];

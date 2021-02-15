/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 14 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: App Routing Module
 *      Routes configuration
 *      with component, path, child components and guard
 *      States 404 redirect
 *      canActivate SignIn Guard
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInGuard } from './sign-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';

/**
 * Routes declaration goes here
 */
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
    canActivate: [SignInGuard],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'session/not-found',
  },
];

/**
 * Binds routes to base Module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

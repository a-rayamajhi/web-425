/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 16 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: Routing Module
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// Routes configuration
export const AppRoutes: Routes = [
  { path: '', component: SignInComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];

/**
 * Export Routing Components to
 * access from app Module
 */
export const RoutingComponents = [
  SignInComponent,
  HomeComponent,
  MyDetailsComponent,
  MyImageComponent,
];

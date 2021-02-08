/**
 * Title: not-found.component.ts
 * Author: Professor Krasso
 * Date: 7 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Not Found Component,
 *     Render this component if the route does not exist
 *     in the routing configuration in routing module.
 *     Custom 404 page
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

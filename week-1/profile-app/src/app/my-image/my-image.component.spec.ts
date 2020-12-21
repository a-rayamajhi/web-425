/**
 * Title: Exercise 1.5
 * Author: Professor Krasso
 * Date: 20 December 2020
 * Modified By:  Anil Rayamajhi
 * Description: Components
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

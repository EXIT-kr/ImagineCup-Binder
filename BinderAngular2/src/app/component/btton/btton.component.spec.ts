/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BttonComponent } from './btton.component';

describe('BttonComponent', () => {
  let component: BttonComponent;
  let fixture: ComponentFixture<BttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgIconsComponent } from './svg-icons.component';

describe('SvgIconsComponent', () => {
  let component: SvgIconsComponent;
  let fixture: ComponentFixture<SvgIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

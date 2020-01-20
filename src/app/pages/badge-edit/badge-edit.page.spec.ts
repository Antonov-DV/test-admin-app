import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeEditPage } from './badge-edit.page';

describe('BadgeEditPage', () => {
  let component: BadgeEditPage;
  let fixture: ComponentFixture<BadgeEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

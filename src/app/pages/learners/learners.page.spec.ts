import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersPage } from './learners.page';

describe('LearnersPage', () => {
  let component: LearnersPage;
  let fixture: ComponentFixture<LearnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

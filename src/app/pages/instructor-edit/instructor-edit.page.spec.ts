import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditPage } from './instructor-edit.page';

describe('InstructorEditPage', () => {
  let component: InstructorEditPage;
  let fixture: ComponentFixture<InstructorEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

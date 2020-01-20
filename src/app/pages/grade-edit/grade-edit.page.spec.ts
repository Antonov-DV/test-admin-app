import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEditPage } from './grade-edit.page';

describe('GradeEditPage', () => {
  let component: GradeEditPage;
  let fixture: ComponentFixture<GradeEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

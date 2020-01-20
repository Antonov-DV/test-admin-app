import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerEditPage } from './learner-edit.page';

describe('LearnerEditPage', () => {
  let component: LearnerEditPage;
  let fixture: ComponentFixture<LearnerEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

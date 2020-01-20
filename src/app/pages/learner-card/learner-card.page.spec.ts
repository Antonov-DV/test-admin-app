import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerCardPage } from './learner-card.page';

describe('LearnerCardPage', () => {
  let component: LearnerCardPage;
  let fixture: ComponentFixture<LearnerCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

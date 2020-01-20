import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneEditPage } from './milestone-edit.page';

describe('MilestoneEditPage', () => {
  let component: MilestoneEditPage;
  let fixture: ComponentFixture<MilestoneEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

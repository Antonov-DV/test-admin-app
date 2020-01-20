import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEditPage } from './level-edit.page';

describe('LevelEditPage', () => {
  let component: LevelEditPage;
  let fixture: ComponentFixture<LevelEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

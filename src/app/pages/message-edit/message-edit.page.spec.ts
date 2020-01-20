import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditPage } from './message-edit.page';

describe('MessageEditPage', () => {
  let component: MessageEditPage;
  let fixture: ComponentFixture<MessageEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

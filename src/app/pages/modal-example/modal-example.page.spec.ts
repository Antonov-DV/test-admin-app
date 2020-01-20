import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamplePage } from './modal-example.page';

describe('ModalExamplePage', () => {
  let component: ModalExamplePage;
  let fixture: ComponentFixture<ModalExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

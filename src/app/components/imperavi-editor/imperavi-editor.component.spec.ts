

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperaviEditorComponent } from './imperavi-editor.component';

describe('ImperaviEditorComponent', () => {
  let component: ImperaviEditorComponent;
  let fixture: ComponentFixture<ImperaviEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperaviEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperaviEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPackagesPage } from './credit-packages.page';

describe('CreditPackagesPage', () => {
  let component: CreditPackagesPage;
  let fixture: ComponentFixture<CreditPackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditPackagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

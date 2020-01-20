import { TestBed, inject } from '@angular/core/testing';

import { MyPalMessageDataProviderService } from './mypal-message-data-provider.service';

describe('MyPalMessageDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPalMessageDataProviderService]
    });
  });

  it('should be created', inject([MyPalMessageDataProviderService], (service: MyPalMessageDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

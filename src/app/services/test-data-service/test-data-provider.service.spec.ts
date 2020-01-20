import { TestBed, inject } from '@angular/core/testing';

import { TestDataProviderService } from './test-data-provider.service';

describe('TestDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDataProviderService]
    });
  });

  it('should be created', inject([TestDataProviderService], (service: TestDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CommonDataProviderService } from './common-data-provider.service';

describe('CommonDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonDataProviderService]
    });
  });

  it('should be created', inject([CommonDataProviderService], (service: CommonDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

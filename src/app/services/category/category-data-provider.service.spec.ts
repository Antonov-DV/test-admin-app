import { TestBed, inject } from '@angular/core/testing';

import { CategoryDataProviderService } from './category-data-provider.service';

describe('CategoryDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryDataProviderService]
    });
  });

  it('should be created', inject([CategoryDataProviderService], (service: CategoryDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

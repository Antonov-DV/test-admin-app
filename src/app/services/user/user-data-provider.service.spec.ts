import { TestBed, inject } from '@angular/core/testing';

import { UserDataProviderService } from './user-data-provider.service';

describe('UserDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataProviderService]
    });
  });

  it('should be created', inject([UserDataProviderService], (service: UserDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { InstructorDataProviderService } from './instructor-data-provider.service';

describe('InstructorDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructorDataProviderService]
    });
  });

  it('should be created', inject([InstructorDataProviderService], (service: InstructorDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

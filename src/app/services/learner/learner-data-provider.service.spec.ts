import { TestBed, inject } from '@angular/core/testing';

import { LearnerDataProviderService } from './learner-data-provider.service';

describe('LearnerDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnerDataProviderService]
    });
  });

  it('should be created', inject([LearnerDataProviderService], (service: LearnerDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

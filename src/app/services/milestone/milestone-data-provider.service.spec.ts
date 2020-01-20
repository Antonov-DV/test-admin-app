import { TestBed, inject } from '@angular/core/testing';

import { MilestoneDataProviderService } from './milestone-data-provider.service';

describe('MilestoneDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilestoneDataProviderService]
    });
  });

  it('should be created', inject([MilestoneDataProviderService], (service: MilestoneDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

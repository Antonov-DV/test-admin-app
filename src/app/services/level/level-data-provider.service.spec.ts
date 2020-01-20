import { TestBed, inject } from '@angular/core/testing';

import { LevelDataProviderService } from './level-data-provider.service';

describe('LevelDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LevelDataProviderService]
    });
  });

  it('should be created', inject([LevelDataProviderService], (service: LevelDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

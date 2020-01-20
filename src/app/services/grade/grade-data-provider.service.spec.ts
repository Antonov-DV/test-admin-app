import { TestBed, inject } from '@angular/core/testing';

import { GradeDataProviderService } from './grade-data-provider.service';

describe('GradeDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeDataProviderService]
    });
  });

  it('should be created', inject([GradeDataProviderService], (service: GradeDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

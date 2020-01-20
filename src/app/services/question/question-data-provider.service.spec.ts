import { TestBed, inject } from '@angular/core/testing';

import { QuestionDataProviderService } from './question-data-provider.service';

describe('QuestionDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionDataProviderService]
    });
  });

  it('should be created', inject([QuestionDataProviderService], (service: QuestionDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { S3ImageService } from './s3-image.service';

describe('S3ImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S3ImageService]
    });
  });

  it('should be created', inject([S3ImageService], (service: S3ImageService) => {
    expect(service).toBeTruthy();
  }));
});

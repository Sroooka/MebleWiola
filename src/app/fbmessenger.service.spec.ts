import { TestBed } from '@angular/core/testing';

import { FbmessengerService } from './fbmessenger.service';

describe('FbmessengerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbmessengerService = TestBed.get(FbmessengerService);
    expect(service).toBeTruthy();
  });
});

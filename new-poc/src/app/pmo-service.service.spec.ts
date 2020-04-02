import { TestBed } from '@angular/core/testing';

import { PmoServiceService } from './pmo-service.service';

describe('PmoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PmoServiceService = TestBed.get(PmoServiceService);
    expect(service).toBeTruthy();
  });
});

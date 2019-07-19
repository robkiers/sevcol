import { TestBed } from '@angular/core/testing';

import { TreatmentStoreService } from './treatment.service';

describe('TreatmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreatmentStoreService = TestBed.get(TreatmentStoreService);
    expect(service).toBeTruthy();
  });
});

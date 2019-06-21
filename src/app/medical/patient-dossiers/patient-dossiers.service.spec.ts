import { TestBed } from '@angular/core/testing';

import { PatientdossiersService } from './patient-dossiers.service';

describe('PatientdossiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientdossiersService = TestBed.get(PatientdossiersService);
    expect(service).toBeTruthy();
  });
});

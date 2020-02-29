import { TestBed } from '@angular/core/testing';

import { GenerateQRService } from './generate-qr.service';

describe('GenerateQRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateQRService = TestBed.get(GenerateQRService);
    expect(service).toBeTruthy();
  });
});

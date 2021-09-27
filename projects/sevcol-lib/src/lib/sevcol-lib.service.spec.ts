import { TestBed } from '@angular/core/testing';

import { SevcolLibService } from './sevcol-lib.service';

describe('SevcolLibService', () => {
  let service: SevcolLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevcolLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

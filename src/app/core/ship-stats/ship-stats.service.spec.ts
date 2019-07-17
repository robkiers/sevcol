import { TestBed } from '@angular/core/testing';

import { ShipStatsService } from './ship-stats.service';

describe('ShipStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipStatsService = TestBed.get(ShipStatsService);
    expect(service).toBeTruthy();
  });
});

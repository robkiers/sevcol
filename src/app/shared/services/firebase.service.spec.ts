import { TestBed } from '@angular/core/testing';

import { FirebaseSharedService } from './firebase.service';

describe('FirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseSharedService = TestBed.get(FirebaseSharedService);
    expect(service).toBeTruthy();
  });
});

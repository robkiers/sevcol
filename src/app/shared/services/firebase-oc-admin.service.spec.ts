import { TestBed } from '@angular/core/testing';

import { FirebaseOcAdminService } from './firebase-oc-admin.service';

describe('FirebaseOcAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseOcAdminService = TestBed.get(FirebaseOcAdminService);
    expect(service).toBeTruthy();
  });
});

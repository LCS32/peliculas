import { TestBed } from '@angular/core/testing';

import { SecurityStorageService } from './security-storage.service';

describe('SecurityStorageService', () => {
  let service: SecurityStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

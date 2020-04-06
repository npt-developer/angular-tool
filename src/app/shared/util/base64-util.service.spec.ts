import { TestBed } from '@angular/core/testing';

import { Base64UtilService } from './base64-util.service';

describe('Base64UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Base64UtilService = TestBed.get(Base64UtilService);
    expect(service).toBeTruthy();
  });
});

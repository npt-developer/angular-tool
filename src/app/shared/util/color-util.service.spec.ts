import { TestBed } from '@angular/core/testing';

import { ColorUtilService } from './color-util.service';

describe('ColorUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorUtilService = TestBed.get(ColorUtilService);
    expect(service).toBeTruthy();
  });
});

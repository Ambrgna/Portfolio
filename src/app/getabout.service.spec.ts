import { TestBed } from '@angular/core/testing';

import { GetaboutService } from './getabout.service';

describe('GetaboutService', () => {
  let service: GetaboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetaboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

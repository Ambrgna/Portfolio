import { TestBed } from '@angular/core/testing';

import { GetprojectsService } from './getprojects.service';

describe('GetprojectsService', () => {
  let service: GetprojectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetprojectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

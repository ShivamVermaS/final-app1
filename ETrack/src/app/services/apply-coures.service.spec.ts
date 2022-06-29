import { TestBed } from '@angular/core/testing';

import { ApplyCouresService } from './apply-coures.service';

describe('ApplyCouresService', () => {
  let service: ApplyCouresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyCouresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

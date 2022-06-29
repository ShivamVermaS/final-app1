import { TestBed } from '@angular/core/testing';

import { CourseServService } from './course-serv.service';

describe('CourseServService', () => {
  let service: CourseServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

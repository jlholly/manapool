import { TestBed } from '@angular/core/testing';

import { DateTimeFormatterService } from '../../utils/services/date-time-formatter/date-time-formatter.service';

describe('DateTimeFormatterService', () => {
  let service: DateTimeFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

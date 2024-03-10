import { TestBed } from '@angular/core/testing';

import { ErrorsHandlingService } from './errors-handling.service';

describe('ErrorsHandlingService', () => {
  let service: ErrorsHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorsHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

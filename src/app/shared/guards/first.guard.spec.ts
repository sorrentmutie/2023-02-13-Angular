import { TestBed } from '@angular/core/testing';

import { FirstGuard } from './first.guard';

describe('FirstGuard', () => {
  let guard: FirstGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

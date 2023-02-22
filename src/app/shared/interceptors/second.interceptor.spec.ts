import { TestBed } from '@angular/core/testing';

import { SecondInterceptor } from './second.interceptor';

describe('SecondInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecondInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecondInterceptor = TestBed.inject(SecondInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

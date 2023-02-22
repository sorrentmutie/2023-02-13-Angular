import { TestBed } from '@angular/core/testing';

import { FirstInterceptor } from './first.interceptor';

describe('FirstInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FirstInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FirstInterceptor = TestBed.inject(FirstInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

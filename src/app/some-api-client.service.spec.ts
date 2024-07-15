import { TestBed } from '@angular/core/testing';

import { SomeApiClientService } from './some-api-client.service';

describe('SomeApiClientService', () => {
  let service: SomeApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DnaXmenService } from './dna-xmen.service';

describe('DnaXmenService', () => {
  let service: DnaXmenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnaXmenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

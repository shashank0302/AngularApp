import { TestBed } from '@angular/core/testing';

import { DataTelevisionService } from './data-television.service';

describe('DataTelevisionService', () => {
  let service: DataTelevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTelevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

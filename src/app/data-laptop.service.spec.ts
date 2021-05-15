import { TestBed } from '@angular/core/testing';

import { DataLaptopService } from './data-laptop.service';

describe('DataLaptopService', () => {
  let service: DataLaptopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLaptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataMobilesService } from './data-mobiles.service';

describe('DataMobilesService', () => {
  let service: DataMobilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMobilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

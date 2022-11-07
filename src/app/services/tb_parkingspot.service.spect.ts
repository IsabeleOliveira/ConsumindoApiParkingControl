import { TestBed } from '@angular/core/testing';

import { tb_parkingspotService } from './tb_parkingspot.service';

describe('tb_parkingspotService', () => {
  let service: tb_parkingspotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tb_parkingspotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

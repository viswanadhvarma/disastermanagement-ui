import { TestBed } from '@angular/core/testing';

import { OfficialUpdateService } from './official-update.service';

describe('OfficialUpdateService', () => {
  let service: OfficialUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficialUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

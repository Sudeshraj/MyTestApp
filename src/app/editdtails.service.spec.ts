import { TestBed } from '@angular/core/testing';

import { EditdtailsService } from './editdtails.service';

describe('EditdtailsService', () => {
  let service: EditdtailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditdtailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

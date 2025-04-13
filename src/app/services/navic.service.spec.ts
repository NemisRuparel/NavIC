import { TestBed } from '@angular/core/testing';

import { NavicService } from './navic.service';

describe('NavicService', () => {
  let service: NavicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

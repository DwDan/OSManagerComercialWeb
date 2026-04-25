import { TestBed } from '@angular/core/testing';
import { CommercialPlansService } from './comercial-plans.service';

describe('CommercialPlansService', () => {
  let service: CommercialPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

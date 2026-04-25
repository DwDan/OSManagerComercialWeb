import { TestBed } from '@angular/core/testing';
import { TenantRegistrationService } from './tenant-registration.service';

describe('TenantRegistrationService', () => {
  let service: TenantRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

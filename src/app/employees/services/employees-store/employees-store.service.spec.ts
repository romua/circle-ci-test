import { TestBed } from '@angular/core/testing';

import { EmployeesStoreService } from './employees-store.service';

describe('EmployeesStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesStoreService = TestBed.get(EmployeesStoreService);
    expect(service).toBeTruthy();
  });
});

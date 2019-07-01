import { TestBed } from '@angular/core/testing';

import { EmployeesStoreService } from './employees-store.service';
import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('EmployeesStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppModule
    ],
    providers: [
      {
        provide: APP_BASE_HREF,
        useValue: ''
      }
    ]
  }));

  it('should be created', () => {
    const service: EmployeesStoreService = TestBed.get(EmployeesStoreService);
    expect(service).toBeTruthy();
  });
});

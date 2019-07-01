import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('EmployeesService', () => {
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
    const service: EmployeesService = TestBed.get(EmployeesService);
    expect(service).toBeTruthy();
  });
});

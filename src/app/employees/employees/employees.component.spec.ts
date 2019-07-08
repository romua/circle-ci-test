import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelPipe } from '../pipes/label/label.pipe';

describe('EmployeesListComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesComponent, EmployeeComponent, LabelPipe],
      imports: [
        AppModule,
        ScrollingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: ''
        }
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EmployeeComponent } from '../employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelPipe } from '../pipes/label/label.pipe';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesListComponent, EmployeeComponent, LabelPipe],
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
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

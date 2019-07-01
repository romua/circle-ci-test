import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/models';
import { EmployeesStoreService } from '../services/employees-store/employees-store.service';
import { EmployeesService } from '../services/employees/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee = null;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
  }

}

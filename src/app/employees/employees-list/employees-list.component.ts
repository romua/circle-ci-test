import { Component, Host, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/models';
import { EmployeesStoreService } from '../services/employees-store/employees-store.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  selectedEmployee: Employee;

  constructor(@Host() private storeEmployee: EmployeesStoreService) {
    this.employees$ = storeEmployee.employees$;
  }

  ngOnInit() {
    // this.storeEmployee.loadEmployees();
  }

  trackByFn(index, item) {
    return item.id; // or item.id
  }

  selectEmployee(id: string) {
    this.selectedEmployee = this.storeEmployee.getEmployeeById(id);
  }
}

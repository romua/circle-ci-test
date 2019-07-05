import { Component, ElementRef, Host, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/models';
import { EmployeesStoreService } from '../services/employees-store/employees-store.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  @ViewChild('enableByDefault', {static: false}) enableByDefault: ElementRef;

  employees$: Observable<Employee[]>;
  selectedEmployee: Employee;
  isEdit = false;

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
    if (this.selectedEmployee && this.selectedEmployee.id === id) {
      return;
    }
    this.selectedEmployee = this.storeEmployee.getEmployeeById(id);
    this.isEdit = (this.enableByDefault.nativeElement as HTMLInputElement).checked;
  }

  enableEditMode(event: boolean) {
    console.log(event);

    console.log(`Edit mode was: ${event ? 'enabled' : 'disabled'}`);
    this.isEdit = event;
  }

  updateEmployeeData(event: Employee) {
    console.log(event);
  }
}

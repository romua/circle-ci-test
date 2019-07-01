import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeesStoreService } from '../employees/services/employees-store/employees-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private store: EmployeesStoreService) {
    this.store.loadEmployees();
  }
}

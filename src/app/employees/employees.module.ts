import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

const components = [
  EmployeesListComponent, EmployeeComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ScrollingModule
  ],
  exports: [...components]
})
export class EmployeesModule {
}

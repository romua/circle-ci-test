import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelPipe } from './pipes/label/label.pipe';

const components = [
  EmployeesComponent, EmployeeComponent
];

const pipes = [
  LabelPipe
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...components, ...pipes]
})
export class EmployeesModule {
}

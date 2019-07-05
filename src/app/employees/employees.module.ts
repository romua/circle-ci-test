import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelPipe } from './pipes/label/label.pipe';

const components = [
  EmployeesListComponent, EmployeeComponent
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

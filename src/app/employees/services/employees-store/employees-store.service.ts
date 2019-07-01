import { Injectable } from '@angular/core';
import { Employee } from '../../models/models';
import { EmployeesService } from '../employees/employees.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesStoreService {

  constructor(private employeesService: EmployeesService) {
    console.log('log');
  }

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  // tslint:disable-next-line:variable-name
  private readonly _employees = new BehaviorSubject<Employee[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly employees$ = this._employees.asObservable();


  // we'll compose the todos$ observable with map operator to create a stream of only completed todos
  // readonly completedTodos$ = this.todos$.pipe(
  //     map(todos => this.todos.filter(todo => todo.isCompleted))
  // );

  // the getter will return the last value emitted in _todos subject
  public get employees(): Employee[] {
    return this._employees.getValue();
  }


  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  public set employees(val: Employee[]) {
    this._employees.next(val);
  }

  getEmployeeById(id: string): Employee {
    const wantedEmployee = this.employees.find((employee: Employee) => employee.id === id);
    return Object.assign({}, wantedEmployee);
  }

  loadEmployees(): void {
    this.employeesService.getEmployees()
        .subscribe({
          next: (value: Employee[]) => {
            this.employees = value;
          },
          error: err => {

          },
          complete: () => {
          }
        });
  }
}

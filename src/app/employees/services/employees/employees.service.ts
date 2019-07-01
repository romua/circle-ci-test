import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private API_URL = `http://dummy.restapiexample.com/api/v1/`;

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.API_URL + 'employees');
  }

  getEmployeeById(): Observable<any> {
    return this.http.get(this.API_URL + 'employees');
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.API_URL + 'create', {...employee});
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.API_URL + 'update', {...employee});
  }

  deleteEmployeeById(employeeId: string): Observable<any> {
    return this.http.delete(this.API_URL + 'delete/' + employeeId);
  }
}

// tslint:disable:variable-name
export class Employee {
  public readonly id: string;
  public readonly employee_name: string;
  public readonly employee_salary: string;
  public readonly employee_age: string;
  public readonly profile_image: string;

  constructor(id?: string,
              employee_name?: string,
              employee_salary?: string,
              employee_age?: string,
              profile_image?: string
  ) {
    this.id = id;
    this.employee_age = employee_age;
    this.employee_name = employee_name;
    this.profile_image = profile_image;
  }
}

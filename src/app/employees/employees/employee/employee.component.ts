import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Employee } from '../../models/models';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

export type MessageType = 'warning' | 'info' | 'danger';

export interface Message {
  data: string[];
  type: MessageType;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  // tslint:disable-next-line:variable-name
  public _employee: Employee;
  public formEntries: any[] = [];
  @ViewChild('errorContainer', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  @ViewChild('errorMessagesTemplate', {read: TemplateRef, static: false}) template: TemplateRef<any>;

  @Input() set employee(data: Employee) {
    if (data) {
      this._employee = cloneDeep(data);
      console.log(this._employee);
      this.formEntries = Object.entries(data);
      this.createForm(data);
      this.patchForm(data);
    }
  }

  @Input() editMode = false;

  @Output() edit = new EventEmitter();
  @Output() updatedData = new EventEmitter<Employee>();

  employeeForm: FormGroup;

  static createFormControl(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  private createForm(employeeData: Employee): void {
    const group = {};
    for (const key in employeeData) {
      if (key in employeeData && key !== 'id' && key !== 'profile_image') {
        group[key] = EmployeeComponent.createFormControl();
      }
    }
    this.employeeForm = new FormGroup(group);
  }

  submitForm() {
    if (this.employeeForm.valid) {
      const updatedInfo = {
        ...cloneDeep(this.employeeForm.value),
        id: this._employee.id,
        profile_image: this._employee.profile_image
      };
      this.emmitUpdatedData(updatedInfo);
    } else {
      const formErrors = [...this.getFormValidationErrors()];
      this.showMessage({data: formErrors, type: 'danger'});
    }
  }

  private patchForm(employeeData: Employee) {
    for (const key in employeeData) {
      if (key in employeeData && key !== 'id' && key !== 'profile_image') {
        this.employeeForm.get(key).patchValue(employeeData[key]);
      }
    }
  }

  getFormValidationErrors(): string[] {
    const errorMessages = [];
    Object.keys(this.employeeForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.employeeForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errorMessages.push(`Key control: ${key}, keyError: ${keyError}`);
        });
      }
    });
    return errorMessages;
  }

  private emmitUpdatedData(updatedInfo: any) {
    if (isEqual(updatedInfo, this._employee)) {
      this.showMessage({data: ['Nothing to update'], type: 'info'});
      this.clearContainer(true);
    } else {
      this.updatedData.emit(updatedInfo);
    }
  }

  private showMessage(message: Message = {data: [], type: 'danger'}) {
    this.clearContainer();
    if (message.data && message.data.length > 0) {
      console.log('show formErrors', message.data);
      const view = this.template.createEmbeddedView({...message});
      this.container.insert(view);
    }
  }

  private clearContainer(async: boolean = false) {
    if (async) {
      setTimeout(() => {
        this.container.clear();
      }, 2000);
    } else {
      this.container.clear();
    }
  }
}




import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ElementRef, forwardRef, Input, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
})
export class SwitchComponent implements ControlValueAccessor {
// tslint:disable:variable-name
  private _value = false;
  private _disabled: boolean = false;

  @Input() set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  @ViewChild('wrap', {static: false}) wrap: ElementRef;
  @ViewChild('input', {static: false}) input: ElementRef;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
  }

  // tslint:disable:semicolon
  onChange: any = () => {
  };

  onTouch: any = () => {
  };


  set value(val: boolean) {
    console.log('setting value');
    this._value = val;
    this.onChange(val);
    this.onTouch(val);
  }

  get value() {
    return this._value;
  }

  writeValue(value: any) {
    console.log('writing value');
    this.value = value;
  }


  registerOnChange(fn: any) {
    console.log(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    console.log(fn);
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const action = isDisabled ? 'addClass' : 'removeClass';
    this._renderer[action](this.wrap.nativeElement, 'disabled');
    this._renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  handleInput(event: boolean) {
    this.value = event;
  }
}


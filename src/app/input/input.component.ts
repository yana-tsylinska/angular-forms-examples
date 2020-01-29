import { Component, Input, ViewChild, forwardRef } from '@angular/core';

import { NgModel, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }]
})
export class InputComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() type: string;
  @Input() question: any;

  @ViewChild(NgModel, { static: true }) model: NgModel;

  selectedValue: number;
  disabled: boolean;

  constructor() { }

  writeValue(value: number) {
    if (value !== undefined) {
      this.selectedValue = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  selectValue(value: any) {
    this.selectedValue = value;
    this.propagateChange(value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

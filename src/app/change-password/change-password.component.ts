import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      currentPass: new FormControl(null, Validators.required),
      newPass: new FormControl(null, Validators.required),
      newPass2: new FormControl(null, Validators.required),
    }, this.wrongPassword());
  }

  onSubmit() {
    if (this.form.invalid) {
      console.error('invalid');

      return;
    }

    console.dir(this.form);
  }


  wrongPassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const values = control.value;

      return values.newPass === values.newPass2 ? null : {confirmPassword: {name}};
    };
  }

  valueChangesSetup() {
    this.form.get('email').valueChanges.subscribe((value) => {
      console.warn(value);
    });
  }
}

//import { Directive, Input } from '@angular/core';
//import { EMAIL_VALIDATOR, Validator, ValidationErrors } from '@angular/forms/src/directives/validators';
//import { AbstractControl, Validators } from '@angular/forms';

//@Directive({
//  selector: '[email][formControlName], [email][formControl], [email][ngModel]',
//  providers: [EMAIL_VALIDATOR]
//})
//export class EmailvalidatorDirective implements Validator {
//  private _enabled: boolean;
//  private _onChange: () => void;

//  @Input()
//  set email(value: boolean | string) {
//    this._enabled = value === '' || value === true || value === 'true';
//    if (this._onChange) this._onChange();
//  }

//  validate(c: AbstractControl): ValidationErrors | null {
//    return this._enabled ? Validators.email(c) : null;
//  }

//  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
//}

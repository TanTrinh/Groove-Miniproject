import { Directive, OnChanges, Input, SimpleChanges } from '@angular/core';
import { PATTERN_VALIDATOR, Validator, ValidatorFn, ValidationErrors } from '@angular/forms/src/directives/validators';
import { AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
  providers: [PATTERN_VALIDATOR],
  host: { '[attr.pattern]': 'pattern ? pattern : null' }
})
export class PhonenumbervalidatorDirective implements Validator,
  OnChanges {

  private _validator: ValidatorFn;
  private _onChange: () => void;

  @Input() pattern: string | RegExp;

  ngOnChanges(changes: SimpleChanges): void {
    if ('pattern' in changes) {
      this._createValidator();
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null { return this._validator(c); }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void { this._validator = Validators.pattern(this.pattern); }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailvalidatorDirective } from './directives/emailvalidator.directive';
import { PhonenumbervalidatorDirective } from './directives/phonenumbervalidator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailvalidatorDirective, PhonenumbervalidatorDirective]
})
export class SharedModule { }

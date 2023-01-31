import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appPasswordConfirmation]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: PasswordConfirmationDirective,
    multi: true
    }
  ]
})
export class PasswordConfirmationDirective {

  @Input() pass!:any;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors|null{
    if (control && control.value && control.value != this.pass){
      return {'different_pass': true}
    }else{
      return null
    }
  }

}

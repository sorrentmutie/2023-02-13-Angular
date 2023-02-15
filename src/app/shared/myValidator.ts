import { AbstractControl } from "@angular/forms";

export function MyValidator(control: AbstractControl) {
   var value = control.value as string;
   if(!value.toUpperCase().startsWith('S')) {
        return { myValidator: true}
   }
   return null;
}
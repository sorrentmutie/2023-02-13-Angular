import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatProductName'
})
export class FormatProductNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace("F", "$$$f$$$");
  }

}

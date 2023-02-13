import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/products/models/product';

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {

  transform(value: Address | undefined): string {
    if (value === undefined) return "";
    let outputValue = "";
    if(value.state && value.state.length > 0) {
      outputValue += "STATO: " + value.state + "";
    }
    if(value.state && value.state.length > 0) {
      outputValue += " STRADA: " + value.street;
    }
    return outputValue;
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'fomatDatePipe'})
export class FomateDatePipe implements PipeTransform {
  transform(value: string): string {
   
    const _regExp  = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');
    if ( _regExp.test(value) ) {
        /* do your work */
        return (new Date(value)).toLocaleDateString() ;
    }
    else{
      return value;
    }
  }
}
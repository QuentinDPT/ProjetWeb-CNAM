import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1 ').trim();;
  }

}

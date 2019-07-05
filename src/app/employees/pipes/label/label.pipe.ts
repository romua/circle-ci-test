import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  transform(value: string | null, args?: any): any {
    if (typeof value === 'string') {
      return value.split('_')
                  .map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
                  .join(' ');

    } else {
      return null;
    }
  }
}

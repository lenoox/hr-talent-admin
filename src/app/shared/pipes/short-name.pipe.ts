import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortName' })
export class ShortNamePipe implements PipeTransform {
  transform(name: string): any {
    if (name == null) {
      return;
    }
    return name
      .split(' ')
      .map(n => n[0])
      .join('');
  }
}

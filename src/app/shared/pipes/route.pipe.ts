import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({ name: 'isRoute' })
export class IsRoute implements PipeTransform {
  constructor(private router: Router) {}
  transform(value: any): boolean {
    console.log(this.router.url);
    return this.router.url === value;
  }
}

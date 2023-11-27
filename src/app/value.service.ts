import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  loaded = false;
  value = '';
  constructor() { }

  getValue() {
    if (this.loaded) {
      return `value is ${this.value}`;
    }
    return 'empty';
  }
}

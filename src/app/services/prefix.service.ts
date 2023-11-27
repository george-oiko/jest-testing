import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrefixService {
  hasPrefix = true;

  constructor() { }

  getPrefix(): string {
    return this.hasPrefix ? 'ng_' : '';
  }
}

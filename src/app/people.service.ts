import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private valueService: ValueService) { }

  getPeople(): string[] {
    if (this.valueService.getValue() === 'empty') {
      return [];
    }
    return [this.valueService.getValue()];
  }
}

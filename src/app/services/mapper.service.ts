import { Injectable } from '@angular/core';
import { PrefixService } from './prefix.service';
import { PeopleService } from '../people.service';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private prefixService: PrefixService, private peopleService: PeopleService) { }

  mapValues(): string[] {
    return this.peopleService.getPeople().map(p => this.prefixService.getPrefix() + p);
  }
}

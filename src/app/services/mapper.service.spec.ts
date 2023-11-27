import { TestBed } from '@angular/core/testing';

import { MapperService } from './mapper.service';
import { PeopleService } from '../people.service';
import { PrefixService } from './prefix.service';

describe('MapperService', () => {
  let service: MapperService;
  let people: PeopleService;
  let prefix: PrefixService;
  const prefixSpy = {
    getPrefix: jest.fn()
  }

  const peopleSpy = {
    getPeople: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PeopleService, useValue: peopleSpy },
      { provide: PrefixService, useValue: prefixSpy }]
    });
    service = TestBed.inject(MapperService);
    people = TestBed.inject(PeopleService);
    prefix = TestBed.inject(PrefixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return array of ng_John', () => {
    peopleSpy.getPeople.mockReturnValue(['John']);
    prefixSpy.getPrefix.mockReturnValue(['ng_']);
    expect(service.mapValues()).toEqual(['ng_John']);
  });
  
  it('should return array of Maria', () => {
    peopleSpy.getPeople.mockReturnValue(['Maria']);
    prefixSpy.getPrefix.mockReturnValue(['']);
    expect(service.mapValues()).toEqual(['Maria']);
  });
});

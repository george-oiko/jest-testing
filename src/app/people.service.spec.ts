import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { ValueService } from './value.service';


describe('PeopleService', () => {
  let service: PeopleService;
  const valueSpy = {
    getValue: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService, { provide: ValueService, useValue: valueSpy }]
    });
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty array', () => {
    expect(service.getPeople()).toEqual([]);
  });

  it('should return array of John', () => {
    valueSpy.getValue.mockReturnValue('John');
    expect(service.getPeople()).toEqual(['John']);
  });
});

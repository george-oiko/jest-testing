import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars() {
    return [
      {
        brand: 'VW',
        year: 1994
      }, {
        brand: 'Opel',
        year: 2000
      },
    ]
  }
}

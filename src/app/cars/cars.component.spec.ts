import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import { CarService } from '../car.service';

class Mock {
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

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarsComponent],
      providers: [{ provide: CarService, useClass: Mock }]
    });
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('The year of the second car is 2000', () => {
    const li = fixture.debugElement.nativeElement.querySelectorAll('li')[1];
    const year = li.querySelectorAll('span')[1];
    expect(year.textContent).toEqual('2000');
  });
});

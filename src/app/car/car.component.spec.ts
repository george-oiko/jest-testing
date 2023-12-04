import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CarComponent],
  template: ` <app-car [name]="car.name" [year]="car.year" (edited)="edited($event)"></app-car> `,
})
class TestHostComponent {
  car = {
    name: 'VW',
    year: 1980
  }
  editedCar: string | undefined;
  edited(car: string) {
    this.editedCar = car;
  }
}

describe('CarComponent', () => {
  let component: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarComponent, TestHostComponent]
    });
    testHostFixture = TestBed.createComponent(TestHostComponent);
    component = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });
  
  it('name is displayed correctly', () => {
    const name = testHostFixture.nativeElement.querySelector('.name');
    expect(name?.textContent).toEqual('name is VW');
  });
  
  it('name is displayed correctly', () => {
    const edit = testHostFixture.nativeElement.querySelector('.edit');
    edit.click();
    expect(component.editedCar).toEqual('VW');
  });
});

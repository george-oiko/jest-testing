import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import { By } from '@angular/platform-browser';
import { Person } from './person';
import { first } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;
  let debugElement: DebugElement;
  let personData: any;
  let person: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonComponent]
    });
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.person'));
    person = debugElement.nativeElement;
    
    personData = { age: 42, name: 'Maria' };
    
    component.person = personData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display person name', () => {
    const expectedName = personData.name;
    expect(person.textContent).toContain(expectedName);
  });

  it('should raise selected event when clicked (triggerEventHandler)', () => {
    let selectedAge: number | undefined;
    component.selected.pipe(first()).subscribe((age: number) => (selectedAge = age));
  
    debugElement.triggerEventHandler('click');
    expect(selectedAge).toBe(42);
  });
});

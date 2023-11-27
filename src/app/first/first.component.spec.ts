import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { By } from '@angular/platform-browser';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstComponent]
    });
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('1. paragraph content should be first works!', () => {
    const paragraph = fixture.debugElement.nativeElement.querySelector('p');
    expect(paragraph.textContent).toEqual('first works!');
  });
  
  it('2. paragraph content should be first works!', () => {
    const paragraph = fixture.debugElement.query(By.css('p'));
    expect(paragraph.nativeElement.textContent).toEqual('first works!');
  });
});

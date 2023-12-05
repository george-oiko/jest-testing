import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListComponent]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('titile is list', () => {
    component.title = 'list';
    fixture.detectChanges();

    let title = fixture.debugElement.query(By.css('h1'))
    expect(title.nativeElement.textContent).toEqual('list');
    expect(component.title).toEqual('list');

  });
  
  it('list Input works as expected', () => {
    component.list = [{
      code: 1,
      description: ''
    }];
    fixture.detectChanges();

    expect(component.list.length).toEqual(1);
    expect(component.list[0].code).toEqual(1);
  });

  it('refresh button should raise the refreshed event', () => {
    component.list = [{
      code: 1,
      description: ''
    }];
    fixture.detectChanges();

    let emission: any;
    component.refreshed.pipe(first()).subscribe((emit) => (emission = emit));
    let debugElement = fixture.debugElement.query(By.css('button'))
    debugElement.triggerEventHandler('click');
    expect(emission).toBe(undefined);
  });
});

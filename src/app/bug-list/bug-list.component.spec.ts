import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListComponent } from './bug-list.component';
import { Component } from '@angular/core';
import { Bug } from './bug';


@Component({
  standalone: true,
  imports: [BugListComponent],
  template: ` <app-bug-list [list]="bugList" (selected)="selected($event)"></app-bug-list> `,
})
class TestHostComponent {
  bugList: Bug[] = [
    {
      id: 0,
      description: 'desc'
    }, {
      id: 1,
      description: 'desc2'
    }]
    ;
  selectedId: number | undefined;
  selected(id: number) {
    this.selectedId = id;
  }
}

describe('BugListComponent', () => {
  let component: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BugListComponent, TestHostComponent]
    });
    testHostFixture = TestBed.createComponent(TestHostComponent);
    component = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first element is displayed correctly', () => {
    const name = testHostFixture.nativeElement.querySelectorAll('li span')[0];
    expect(name?.textContent).toEqual('0-desc');
  });

  it('second element is displayed correctly', () => {
    const name = testHostFixture.nativeElement.querySelectorAll('li span')[1];
    expect(name?.textContent).toEqual('1-desc2');
  });

  it('Clicking the first elements, emits first elements id', () => {
    const edit = testHostFixture.nativeElement.querySelectorAll('.edit')[0];
    edit.click();
    expect(component.selectedId).toEqual(0);
  });
});

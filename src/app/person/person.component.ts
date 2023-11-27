import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() selected = new EventEmitter<number>();
  
  click() {
    this.selected.emit(this.person.age);
  }
}

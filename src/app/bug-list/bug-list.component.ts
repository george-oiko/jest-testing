import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bug } from './bug';

@Component({
  selector: 'app-bug-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent {
  @Input() list: Bug[] = [];
  @Output() selected = new EventEmitter<number>();

  clicked(bug: Bug) {
    this.selected.emit(bug.id);
  }
}

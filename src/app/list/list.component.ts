import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from './list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list: ListItem[] = [];
  @Input() title!: string;
  @Output() selected = new EventEmitter<number>();
  @Output() refreshed = new EventEmitter<void>();

  itemClick(item: ListItem) {
    this.selected.emit(item.code);
  }

  refresh() {
    this.refreshed.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentational',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentational.component.html',
  styleUrls: ['./presentational.component.css']
})
export class PresentationalComponent {
  @Input() item!: any;
  @Output() clicked = new EventEmitter();


  edit(full: string) {
    this.clicked.emit(full);
  }
}
